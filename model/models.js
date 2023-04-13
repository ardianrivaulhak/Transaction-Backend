const pool = require('../config/connection.js');

class Model {
  static async transactionStore(data, callback) {
    const { menu, price, qyt, payment, total, created_at, customer_id } = data;
    const query = `
    INSERT INTO "Transactions" ("menu", "price", "qyt", "payment", "total", "created_at", "customer_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7);
`;

    pool.query(query, [menu, price, qyt, payment, total, created_at, customer_id], (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }

  static async listTransactions(searchByMenu, searchByPrice, callback) {
    let query = `SELECT t.*, c."name" AS "customer_name"  FROM "Transactions" t 
    JOIN "Customers" c ON t.customer_id = c.id 
    ORDER BY t.created_at DESC `;

    if (searchByMenu) {
      query = `SELECT t.*, c."name" AS "customer_name"  FROM "Transactions" t 
        JOIN "Customers" c ON t.customer_id = c.id 
        WHERE t.menu  ILIKE '%${searchByMenu}%'
        ORDER BY t.created_at DESC `;
    }

    if (searchByPrice) {
      query = `SELECT t.*, t.menu, t.price, c."name"  FROM "Transactions" t
      JOIN "Customers" c ON t.customer_id = c.id
      WHERE t.price  = ${searchByPrice}
      ORDER BY t.created_at DESC `;
    }

    pool.query(query, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res.rows);
      }
    });
  }
}

module.exports = Model;
