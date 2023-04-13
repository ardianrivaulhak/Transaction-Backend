const pool = require('../config/connection');

const ddlCustomers = `
    CREATE TABLE IF NOT EXISTS "Customers" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL
    );
`;

const ddlTransactions = `
    CREATE TABLE IF NOT EXISTS "Transactions" (
        "id" SERIAL PRIMARY KEY,
        "menu" VARCHAR NOT NULL,
        "price" INT NOT NULL,
        "qyt" INT NOT NULL,
        "payment" VARCHAR NOT NULL,
        "total" INT NOT NULL,
        "created_at" TIMESTAMP NOT NULL,
        "customer_id" INTEGER,
            FOREIGN KEY("customer_id") 
            REFERENCES "Customers"("id")
            ON DELETE CASCADE
            ON UPDATE CASCADE
    );
`;

pool.query(ddlCustomers, (err1, res1) => {
  if (err1) console.log('Gagal membuat tabel Customers', err1);
  else {
    console.log('Sukses membuat tabel Customers');

    pool.query(ddlTransactions, (err2, res2) => {
      if (err2) console.log('Gagal membuat tabel Transaction', err2);
      else {
        console.log('Sukses membuat tabel Transaction');
      }
    });
  }
});
