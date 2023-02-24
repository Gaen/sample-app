const express = require('express');
const pino = require('pino-http');
const pretty = require('pino-pretty');

const app = express();
const port = 3000;

app.use(pino(pretty()));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});