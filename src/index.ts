import {Request, Response} from 'express';

const express = require('express');
const pino = require('pino-http');
const pretty = require('pino-pretty');

const port = process.env.PORT || 3000;

const app = express();

app.use(pino(pretty({destination: process.stdout})));

app.get('/', (req: Request, res: Response) => {
    console.log('Got request!');
    res.send('Hello World! This is v2!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});