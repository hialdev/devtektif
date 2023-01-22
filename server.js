require('dotenv').config();
const express = require('express');
const next = require('next');

const hostname = process.env.APP_URL || 'localhost';
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.APP_PORT, 10) || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    const cases = require('./config/api/case');
    server.use('/api',cases);
    
    const articles = require('./config/api/article');
    server.use('/api',articles);

    const services = require('./config/api/service');
    server.use('/api',services);

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log('> Ready on http://'+hostname+':'+port);
    });

});
