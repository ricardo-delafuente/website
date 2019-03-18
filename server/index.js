const express = require('express');
const next = require('next');
const compression = require('compression');

// Services & Middleware
const bodyParser = require('body-parser');
const transporter = require('./services/transporter');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Use HTTPS on all routes; required for the contact form
const requireHTTPS = (req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    // Not using https; force redirect
    res.redirect(`https://${req.header('host')}${req.url}`);
  // https already in use; pass through
  else next();
};

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(compression());
    if (!dev) {
      server.use(requireHTTPS);
    }

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.post('/contact/send', (req, res) => {
      const { name, email, message } = req.body;

      // Prepare message for delivery
      const mail = {
        from: name,
        subject: 'New message from contact form.',
        to: 'delafuente.dev@gmail.com',
        text: `${name} <${email}>\n ${message}`
      };

      // Send message with Nodemailer
      transporter.sendMail(mail, error => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json({
            message: 'Success'
          });
        }
      });
    });

    server.use(function(err, req, res) {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send('Not authorized.');
      }
    });

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, err => {
      if (err) throw err;
      console.log('> Ready on port ' + PORT);
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
