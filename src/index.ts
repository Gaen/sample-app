import {Request, Response} from 'express';

const express = require('express');
const pino = require('pino-http');
const pretty = require('pino-pretty');
const { Client } = require('pg')

const pgUrl = process.env['PG_URL'];

const main = async () => {

    const client = new Client({
        connectionString: pgUrl,
    });
    await client.connect();

    const res = await client.query('SELECT $1::text as message', ['Hello world from pg!']);
    console.log(res.rows[0].message) // Hello world!

    const port = process.env.PORT || 3000;

    const app = express();

    app.use(pino(pretty({destination: process.stdout})));

    app.get('/', (req: Request, res: Response) => {
        console.log('Got request!');
        res.send('Hello World! This is new version!');
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });

}

main().then();