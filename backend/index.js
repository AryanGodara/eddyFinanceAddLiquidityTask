const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

const cors = require('cors');

// Middleware
app.use(bodyParser.json());
// Enable CORS for all routes and origins
app.use(cors());


// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:Km6MuqgzRcRpSH2@cluster0-1.hhmuw56.mongodb.net/")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a schema for the transaction
const TransactionSchema = new mongoose.Schema({
  walletAddress: String,
  transactionDetails: mongoose.Schema.Types.Mixed, // Use Mixed type for simplicity, define according to your needs
  createdAt: { type: Date, default: Date.now }
});

// Create a model from the schema
const Transaction = mongoose.model('Transaction', TransactionSchema);

// POST API to save transactions
app.post('/api/transactions', async (req, res) => {
  const { walletAddress, transactionDetails } = req.body;
  if (!walletAddress) {
    console.log('walletAddress is required');
    return res.status(400).send('walletAddress is required');
  }
  try {
    const transaction = new Transaction({ walletAddress, transactionDetails });
    await transaction.save();
    console.log('Transaction saved successfully: ', transaction);
    res.status(201).send(transaction);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// GET API to fetch transactions by walletAddress
app.get('/api/transactions/:walletAddress', async (req, res) => {
  const { walletAddress } = req.params;
  try {
    const transactions = await Transaction.find({ walletAddress });
    console.log('Transactions fetched successfully');
    res.status(200).send(transactions);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
