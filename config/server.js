require('dotenv').config();
const express = require('express');
const next = require('next');

const dev = process.env.APP_DEV !== 'production';
const port = parseInt(process.env.APP_PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    const cases = require('./api/case');
    server.use('/api',cases);
    
    const articles = require('./api/article');
    server.use('/api',articles);

    const services = require('./api/service');
    server.use('/api',services);

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:'+port);
    });

});
