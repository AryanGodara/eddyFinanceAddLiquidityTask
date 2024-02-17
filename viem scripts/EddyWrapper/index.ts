import dotenv from 'dotenv';
import { createPublicClient, createWalletClient, http } from 'viem';
import {privateKeyToAccount} from 'viem/accounts';
import {zetachainAthensTestnet} from 'viem/chains';
import {abi, bytecode} from './Contract';

const ROUTER_ADDRESS = "5EC5FbE16BF19e1770B1721BEafFD42a416e202b"
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
    chain: zetachainAthensTestnet,
    transport: http(process.env.API_URL),
});

async function main() {
    // Deploy Contract
    let hash = await walletClient.deployContract({
        abi: abi,
        account: account,
        bytecode: bytecode,
        args: [`0x${ROUTER_ADDRESS}`, BigInt(500)]
    });

    console.log(`EddyWrapper deployed with hash: ${hash}`);
    let receipt = publicClient.waitForTransactionReceipt({hash});
    let contractAddress = (await receipt).contractAddress;
    console.log(`Wrapper address: ${contractAddress}`);
}

main().catch(console.error);