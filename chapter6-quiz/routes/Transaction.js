const { getTransactions, getTransactionById, createTransaction, deleteTransaction } = require('./controllers/TransactionController');
const router = require('express').Router();

app.post('/transactions', createTransaction);
app.get('/transactions', getTransactions);
app.get('/transactions/:id', getTransactionById);
app.delete('/transactions/:id', deleteTransaction);

module.exports = router;