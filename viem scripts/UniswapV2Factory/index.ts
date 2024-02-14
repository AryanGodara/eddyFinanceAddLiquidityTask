import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http } from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {sepolia, zetachainAthensTestnet} from 'viem/chains';
import {abi, bytecode} from './UniswapContract';

dotenv.config();

// const CONTRACT_ADDRESS = "0xf05780540786f3351AA5Aa8213b97f80924d902f"; // Factory
const CONTRACT_ADDRESS = "0x5EC5FbE16BF19e1770B1721BEafFD42a416e202b"; // Router

// Initialize Account
const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

// Initialize Client
const walletClient = createWalletClient({
    chain: zetachainAthensTestnet,
    account: account,
    // transport: http("https://zetachain-athens-evm.blockpi.network/v1/rpc/public"),
    transport: http("https://rpc.ankr.com/zetachain_evm_athens_testnet")
});

const publicClient = createPublicClient({
    chain: zetachainAthensTestnet,
    transport: http("https://rpc.ankr.com/zetachain_evm_athens_testnet")
});

async function main() {
    let createPair = await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "createPair",
        args: ["0x74085680B0b54bdAc9Fb2D4Ebe88a21105267a08", "0x52837080D4F395342711907DD58ef6B61a0A93Eb"]
    })
    await publicClient.waitForTransactionReceipt({hash: createPair});
    let getPair = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: abi,
        functionName: "getPair",
        args: ["0x74085680B0b54bdAc9Fb2D4Ebe88a21105267a08", "0x52837080D4F395342711907DD58ef6B61a0A93Eb"]
    })
    console.log("Pair address: ", getPair.toString());
}

main().catch(console.error);