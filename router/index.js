const express = require('express');
const transactionRouter = require('./transaction');
const router = express.Router();

router.use('/transaction', transactionRouter);

module.exports = router;
