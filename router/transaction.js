const ControllerTransaction = require('../controller/ControllerTransaction');

const transactionRouter = require('express').Router();

transactionRouter.post('/add', ControllerTransaction.transactionStore);
transactionRouter.get('/', ControllerTransaction.listTransactions);

module.exports = transactionRouter;
