const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config');
const NAMESPACE = config.NAMESPACE;

const ISSUER = 'https://delafuente.auth0.com/';

// Middleware
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    jwksRequestsPerMinute: 50,
    rateLimit: true,
    jwksUri: `${ISSUER}.well-known/jwks.json`
  }),
  audience: '3s6MX8CBL3n1xethqGrgt83eOSuP1g9C',
  algorithms: ['RS256'],
  issuer: ISSUER
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[`${NAMESPACE}/role`] === role) {
    next();
  } else {
    return res.status(401).send('Not authorized.');
  }
};
