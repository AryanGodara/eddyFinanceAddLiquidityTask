import * as React from 'react'
import {
    useAccount,
} from 'wagmi' 
import axios from 'axios';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';


const TransactionsPage = () => {
    const [transactions, setTransactions] = useState<{ walletId: string, transactionDetails: { transactionType: string, usdcAmount: number, usdtAmount: number } }[]>([]);
    const account = useAccount();
    const address = account.address ? account.address.substring(2) : '';

    useEffect(() => {
        if (address) {
          axios.get(`backend-9mx4bse6m-aryan-godaras-projects.vercel.app/api/transactions/${address}`)
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => console.error(error));
        }
      }, [address]);
        

    return (
        <div className={styles.container}>
      <h1>Transactions</h1>
      {transactions.length > 0 ? (
        <ul className={styles.transactionsList}>
          {[...transactions].reverse().map((transaction, index) => (
            <li key={index} className={styles.transactionItem}>
              <h2>Transaction Type: {transaction.transactionDetails.transactionType}</h2>
              <p><b>Udsc Amount:</b> {transaction.transactionDetails.usdcAmount}</p>
              <p><b>Udsc Amount:</b> {transaction.transactionDetails.usdtAmount}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
    );
}

export default TransactionsPage;