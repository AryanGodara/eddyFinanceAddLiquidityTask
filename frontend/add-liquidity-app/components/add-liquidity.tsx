import * as React from 'react'
import {
    type BaseError,
    useWaitForTransactionReceipt,
    useAccount,
    useWriteContract
} from 'wagmi' 
import { abi, contractAddress } from './abi'
import axios from 'axios';
import styles from '../styles/Home.module.css';

export function AddLiquidity() {
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
        const usdcAmount = formData.get('usdcAmount') as string
        const usdtAmount = formData.get('usdtAmount') as string
        const address = account.address ? account.address.substring(2) : '';
        console.log("SEnding Transaction")
        writeContract({ 
            address: contractAddress, 
            abi, 
            functionName: 'addLiquidity', 
            args: [tokenAAddress, tokenBAddress, BigInt(usdcAmount), BigInt(usdtAmount), BigInt(0), BigInt(0), `0x${address}`, BigInt(Math.floor(Date.now() / 1000) + 60 * 10)]
        })

        console.log("Calling axios api for address: ", address, " and hash: ", hash)
        axios.post('http://localhost:8000/api/transactions', {
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
            {/* <input name="usdcAmount" placeholder="69420" required /> */}
            {/* <input name="usdtAmount" placeholder="" required /> */}
            <div className={styles.inputContainer}>
                <input 
                    className={styles.inputField}
                    name="usdcAmount" 
                    placeholder="USDC Amount" 
                    required 
                />
            </div>
            <div className={styles.inputContainer}>
                <input 
                    className={styles.inputField}
                    name="usdtAmount" 
                    placeholder="USDT Amount" 
                    required 
                />
            </div>
            {/* <button 
                disabled={isPending} 
                type="submit"
            >
                {isPending ? 'Confirming...' : 'Add Liquidity'}
            </button>
             */}
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