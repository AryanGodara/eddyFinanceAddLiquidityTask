import * as React from 'react'
import {
    type BaseError,
    useWaitForTransactionReceipt,
    useAccount,
    useWriteContract
} from 'wagmi' 
import { abi, contractAddress, pairAbi, pairAddress, tokenAbi } from './abi'
import useDebounce from './useDebounce';

import axios from 'axios';
import styles from '../styles/Home.module.css';
import { readContract, waitForTransactionReceipt as waitForTxReceipt } from 'viem/actions';
import { createPublicClient, http } from 'viem'
import { zetachainAthensTestnet } from 'viem/chains';

export function AddLiquidity() {
    const [usdcAmount, setUsdcAmount] = React.useState('');
    const [usdtAmount, setUsdtAmount] = React.useState('');
    const debouncedUsdcAmount = useDebounce(usdcAmount, 500);
    const client = createPublicClient({
        chain: zetachainAthensTestnet,
        transport: http("https://rpc.ankr.com/zetachain_evm_athens_testnet"),
      });

    async function fetchPoolRatio() {        
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

    // const { 
    //     data: hash,
    //     error,
    //     isPending,
    //     writeContract,
    //     writeContractAsync
    // } = useWriteContract()
    const {writeContractAsync} = useWriteContract();
    const account = useAccount();
    // const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    //         useWaitForTransactionReceipt({ 
    //         hash, 
    //     })

    const [addLiquidityHash, setAddLiquidityHash] = React.useState('');
    const [addLiquidityLoading, setAddLiquidityLoading] = React.useState(false);
    const [addLiquidityError, setAddLiquidityError] = React.useState('');

    const tokenAAddress = "0x74085680B0b54bdAc9Fb2D4Ebe88a21105267a08";
    const tokenBAddress = "0x52837080D4F395342711907DD58ef6B61a0A93Eb";

    async function submit(e: React.FormEvent<HTMLFormElement>) { 
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement) 
        const usdcAmount = (formData.get('usdcAmount') as string) + '000000000000000000';
        const usdtAmount = formData.get('usdtAmount') as string + '000000000000000000';
        const address = account.address ? account.address.substring(2) : '';

        // // Check allowance for tokenA
        // const tokenAAllowance = await readContract(client, {
        //     address: tokenAAddress,
        //     abi: tokenAbi,
        //     functionName: 'allowance',
        //     args: [`0x${address}`, contractAddress],
        // });

        // // Check allowance for tokenB
        // const tokenBAllowance = await readContract(client, {
        //     address: tokenBAddress,
        //     abi: tokenAbi,
        //     functionName: 'allowance',
        //     args: [`0x${address}`, contractAddress],
        // });

        // // Approve tokenA
        // await writeContract({
        //     address: tokenAAddress,
        //     abi: tokenAbi,
        //     functionName: 'approve',
        //     args: [contractAddress, BigInt(usdcAmount)],
        // });

        // // Approve tokenB
        // await writeContract({
        //     address: tokenBAddress,
        //     abi: tokenAbi,
        //     functionName: 'approve',
        //     args: [contractAddress, BigInt(usdtAmount)],
        // });

        // const approveA = BigInt(usdcAmount) > BigInt(tokenAAllowance) ? BigInt(usdcAmount)-BigInt(tokenAAllowance) : BigInt(0);
        // const approveB = BigInt(usdtAmount) > BigInt(tokenBAllowance) ? BigInt(usdtAmount)-BigInt(tokenBAllowance) : BigInt(0);

        // console.log("Sending Transaction")
        // writeContract({ 
        //     address: contractAddress, 
        //     abi, 
        //     functionName: 'addLiquidity', 
        //     args: [tokenAAddress, tokenBAddress, BigInt(usdcAmount), BigInt(usdtAmount), BigInt(0), BigInt(0), `0x${address}`, BigInt(Math.floor(Date.now() / 1000) + 60 * 10)]
        // })

        try {
            setAddLiquidityLoading(true); // Start loading state for addLiquidity

            // Approve tokenA, then wait for confirmation
            const approveAResponse = await writeContractAsync({
                address: tokenAAddress,
                abi: tokenAbi,
                functionName: 'approve',
                args: [contractAddress, BigInt(usdcAmount)],
            });
            const receiptA = await waitForTxReceipt(client, {hash: approveAResponse});
            console.log("Approve A receipt: ", receiptA);
    
            // Approve tokenB, then wait for confirmation
            const approveBResponse = await writeContractAsync({
                address: tokenBAddress,
                abi: tokenAbi,
                functionName: 'approve',
                args: [contractAddress, BigInt(usdtAmount)],
            });
            const receiptB = await waitForTxReceipt(client, {hash: approveBResponse});
            console.log("Approve B receipt: ", receiptB);

            // Now, proceed with addLiquidity since both approvals are confirmed
            const addLiquidityResponse = await writeContractAsync({ 
                address: contractAddress, 
                abi, 
                functionName: 'addLiquidity', 
                args: [tokenAAddress, tokenBAddress, BigInt(usdcAmount), BigInt(usdtAmount), BigInt(0), BigInt(0), `0x${address}`, BigInt(Math.floor(Date.now() / 1000) + 60 * 10)]
            });
            const liquidityTxReceipt = await waitForTxReceipt(client, {hash: addLiquidityResponse});
    
            // Handle addLiquidity response (e.g., waiting for transaction receipt)
            console.log("Sending Transaction with hash: ", {liquidityTxReceipt});
            
            setAddLiquidityHash(addLiquidityResponse); // Update state with the transaction hash
            setAddLiquidityLoading(false); // Reset loading state

            // Asiox logic
            console.log("Calling axios api for address: ", address, " and hash: ", addLiquidityHash)
            axios.post('https://backend-9t8xlk89i-aryan-godaras-projects.vercel.app/api/transactions', {
            walletAddress: address,
            transactionDetails: {
                transactionType: 'addLiquidity',
                transactionHash: addLiquidityHash,
                usdcAmount: usdcAmount,
                usdtAmount: usdtAmount,
            },
            headers: {
                    'Content-Type': 'application/json'
            }
            })
            .then(response => console.log("Got response from server: ", response.data))
            .catch(error => console.error(error.message));
        } catch (error) {
            console.error("Error during transaction: ", error);
            setAddLiquidityError(error as string); // Update error state
            setAddLiquidityLoading(false); // Reset loading state
        }
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
                className={`${styles.button} ${addLiquidityLoading ? styles.buttonDisabled : ''}`}
                disabled={addLiquidityLoading} 
                type="submit"
            >
                {addLiquidityLoading ? 'Confirming...' : 'Add Liquidity'}
            </button>

            {addLiquidityHash && <div>Transaction Hash: {addLiquidityHash}</div>}
            {addLiquidityLoading && <div>Waiting for confirmation...</div>}
            {!addLiquidityLoading && addLiquidityHash && <div>Transaction confirmed.</div>}
            {addLiquidityError && <div>Error: {addLiquidityError}</div>}
        </form>
    )
}