const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const router = require('./router');

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
