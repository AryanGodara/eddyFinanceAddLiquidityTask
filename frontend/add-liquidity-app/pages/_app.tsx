import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import Link from 'next/link'; // Import Link from next/link
import { useRouter } from 'next/router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  // arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zetachainAthensTestnet,
  zora,
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'Add-Liquidiy-App',
  projectId: '1fa60620dbd31da258a4b21ea32cbb32',
  chains: [
    mainnet,
    polygon,
    optimism,
    // arbitrum,
    zetachainAthensTestnet,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});

import { AddLiquidity } from '../components/add-liquidity' 

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isTransactionsPage = router.pathname === '/transactions';
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <div style={{margin: '20px'}}>
          <Link href={isTransactionsPage ? '/' : '/transactions'} passHref>
              <button style={{
                padding: '10px 15px',
                background: '#0070f3',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                textDecoration: 'none'
              }}>
                {isTransactionsPage ? 'Go to Home' : 'View Transactions'}
              </button>
            </Link>
          </div>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
