import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http } from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {sepolia, zetachainAthensTestnet} from 'viem/chains';
import {cabi, cbytecode} from './Usdc';
import {tabi, tbytecode} from './Usdt';

dotenv.config();

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
    chain: sepolia,
    transport: http(process.env.API_URL),
});

async function main() {
    // Deploy Contract
    let hash = await walletClient.deployContract({
        abi: tabi,
        account: account,
        bytecode: tbytecode,
    });

    console.log(`USDC deployed with hash: ${hash}`);
    let receipt = publicClient.waitForTransactionReceipt({hash});
    let contractAddress = (await receipt).contractAddress;
    console.log(`Contract address: ${contractAddress}`);

    hash = await walletClient.deployContract({
        abi: tabi,
        account: account,
        bytecode: tbytecode,
    });

    console.log(`USDT deployed with hash: ${hash}`);
    receipt = publicClient.waitForTransactionReceipt({hash});
    contractAddress = (await receipt).contractAddress;
    console.log(`Contract address: ${contractAddress}`);
}

main().catch(console.error);