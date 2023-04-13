const Model = require('../model/models');

class ControllerTransaction {
  static async transactionStore(req, res) {
    const { menu, price, qyt, payment, total, created_at, customer_id } = req.body;

    const data = { menu, price, qyt, payment, total, created_at, customer_id };

    await Model.transactionStore(data, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: 'Internal Server Error',
        });
      } else {
        res.status(201).json({
          message: 'Success Create Transcation',
          data: req.body,
        });
      }
    });
  }

  static async listTransactions(req, res) {
    const { searchByMenu, searchByPrice } = req.query;

    await Model.listTransactions(searchByMenu, searchByPrice, (err, transactions) => {
      if (err) {
        res.status(500).json({
          message: 'Internal Server Error',
        });
      } else {
        res.status(201).json({
          message: 'Success Read Transcations',
          transactions,
        });
      }
    });
  }
}

module.exports = ControllerTransaction;
