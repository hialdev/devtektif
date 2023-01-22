require('dotenv').config();
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.APP_PORT, 10) || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    if (!dev) {
        // Enforce SSL & HSTS in production
        server.use(function(req, res, next) {
          var proto = req.headers["x-forwarded-proto"];
          if (proto === "https") {
            res.set({
              'Strict-Transport-Security': 'max-age=31557600' // one-year
            });
            return next();
          }
          res.redirect("https://" + req.headers.host + req.url);
        });
    }

    const cases = require('./config/api/case');
    server.use('/api',cases);
    
    const articles = require('./config/api/article');
    server.use('/api',articles);

    const services = require('./config/api/service');
    server.use('/api',services);

    server.get('*', (req, res) => {
        handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:'+port);
    });

});
