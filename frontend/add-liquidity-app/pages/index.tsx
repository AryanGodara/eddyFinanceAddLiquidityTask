import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { AddLiquidity } from '../components/add-liquidity' 

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zeta AddLiquidity App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <AddLiquidity />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/AryanGodara" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by Aryan Godara 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
