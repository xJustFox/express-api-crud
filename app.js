require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.get('/', (req, res) => res.send('Home Blog!'));

app.listen(port, host, () => console.log(`Example app listening on http://${host}:${port}`));
