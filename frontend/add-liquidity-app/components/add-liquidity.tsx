import * as React from 'react'
import {
    type BaseError,
    useWaitForTransactionReceipt,
    useAccount,
    useWriteContract
} from 'wagmi' 
import { abi, contractAddress, pairAbi, pairAddress } from './abi'
import useDebounce from './useDebounce';

import axios from 'axios';
import styles from '../styles/Home.module.css';
import { readContract } from 'viem/actions';
import { createPublicClient, http } from 'viem'
import { zetachainAthensTestnet } from 'viem/chains';

export function AddLiquidity() {
    const [usdcAmount, setUsdcAmount] = React.useState('');
    const [usdtAmount, setUsdtAmount] = React.useState('');
    const debouncedUsdcAmount = useDebounce(usdcAmount, 500);

    async function fetchPoolRatio() {
        const client = createPublicClient({
            chain: zetachainAthensTestnet,
            transport: http("https://rpc.ankr.com/zetachain_evm_athens_testnet"),
          });
        
        const res = await readContract(client, {
            address: pairAddress,
            abi: pairAbi,
            functionName: 'getReserves',
        })
        return res[0]/res[1]; // This is just a placeholder
    }

    React.useEffect(() => {
        if (debouncedUsdcAmount) {
            fetchPoolRatio().then((ratio) => {
                const newUsdtAmount = BigInt(debouncedUsdcAmount) * ratio;
                setUsdtAmount(newUsdtAmount.toString());
            });
        }
    }, [debouncedUsdcAmount]);

    const { 
        data: hash,
        error,
        isPending,
        writeContract
    } = useWriteContract()
    const account = useAccount();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
            useWaitForTransactionReceipt({ 
            hash, 
        })

    const tokenAAddress = "0x74085680B0b54bdAc9Fb2D4Ebe88a21105267a08";
    const tokenBAddress = "0x52837080D4F395342711907DD58ef6B61a0A93Eb";

    async function submit(e: React.FormEvent<HTMLFormElement>) { 
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement) 
        const usdcAmount = (formData.get('usdcAmount') as string) + '000000000000000000';
        const usdtAmount = formData.get('usdtAmount') as string + '000000000000000000';
        const address = account.address ? account.address.substring(2) : '';

        console.log("Sending Transaction")
        writeContract({ 
            address: contractAddress, 
            abi, 
            functionName: 'addLiquidity', 
            args: [tokenAAddress, tokenBAddress, BigInt(usdcAmount), BigInt(usdtAmount), BigInt(0), BigInt(0), `0x${address}`, BigInt(Math.floor(Date.now() / 1000) + 60 * 10)]
        })

        console.log("Calling axios api for address: ", address, " and hash: ", hash)
        axios.post('backend-9t8xlk89i-aryan-godaras-projects.vercel.app/api/transactions', {
        walletAddress: address,
        transactionDetails: {
            transactionType: 'addLiquidity',
            transactionHash: hash,
            usdcAmount: usdcAmount,
            usdtAmount: usdtAmount,
        },
        })
        .then(response => console.log("Got response from server: ", response.data))
        .catch(error => console.error(error));
        }

    return (
        <form onSubmit={submit} className={styles.form}>
            <div className={styles.inputContainer}>
                <b>USDC Token (Enter Manually)</b>
                <input 
                    className={styles.inputField}
                    name="usdcAmount" 
                    value={usdcAmount}
                    onChange={(e) => setUsdcAmount(e.target.value)}
                    placeholder="USDC Amount" 
                    required 
                />
            </div>
            <div className={styles.inputContainer}>
            <b>USDC Token (We calculate the ratio for you)</b>
                <input 
                    className={styles.inputField}
                    name="usdtAmount" 
                    value={usdtAmount}
                    onChange={(e) => setUsdtAmount(e.target.value)}
                    placeholder="USDT Amount" 
                    required 
                />
            </div>

            <button 
                className={`${styles.button} ${isPending ? styles.buttonDisabled : ''}`}
                disabled={isPending} 
                type="submit"
            >{isPending ? 'Confirming...' : 'Add Liquidity'}</button>

            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {error && ( 
                <div>Error: {(error as BaseError).shortMessage || error.message}</div> 
            )} 
        </form>
    )
}