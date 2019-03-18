import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';

// Utilities
import { getCookieFromReq } from '../helpers/utils';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'delafuente.auth0.com',
      clientID: `${process.env.CLIENT_ID}`,
      responseType: 'token id_token',
      redirectUri: `${process.env.NAMESPACE}/callback`,
      scope: 'openid profile'
    });

    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      // Method from auth0.js
      this.auth0.parseHash((err, authResult) => {
        // Confirm the results of authentication
        if (authResult && authResult.accessToken && authResult.idToken) {
          // Set session cookies
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
        }
      });
    });
  }

  setSession(authResult) {
    Cookies.set('jwt', authResult.idToken);
  }

  async clientAuthentication() {
    const token = Cookies.getJSON('jwt');
    return await this.verifyToken(token);
  }

  async serverAuthentication(req) {
    if (req.headers.cookie) {
      const token = getCookieFromReq(req, 'jwt');
      return await this.verifyToken(token);
    }
    return undefined;
  }

  async getJWKS() {
    const res = await axios.get(
      'https://delafuente.auth0.com/.well-known/jwks.json'
    );
    return res.data;
  }

  async verifyToken(token) {
    if (token) {
      // Decode JWT and retrieve the JWKS
      const decodedToken = jwt.decode(token, { complete: true });

      if (!decodedToken) {
        return undefined;
      }
      const jwks = await this.getJWKS();
      const jwk = jwks.keys[0];

      // Build certificate using the corresponding x5c
      let certificate = jwk.x5c[0];
      certificate = certificate.match(/.{1,64}/g).join('\n');
      certificate =
        '-----BEGIN CERTIFICATE-----\n' +
        certificate +
        '\n-----END CERTIFICATE-----\n';

      if (jwk.kid === decodedToken.header.kid) {
        try {
          const verifiedToken = jwt.verify(token, certificate);
          const expiresAt = verifiedToken.exp * 1000;
          return (verifiedToken && new Date().getTime()) < expiresAt
            ? verifiedToken
            : undefined;
        } catch (err) {
          return undefined;
        }
      }
    }
    return undefined;
  }

  logout() {
    Cookies.remove('jwt');

    this.auth0.logout({
      returnTo: process.env.NAMESPACE,
      clientID: process.env.CLIENT_ID
    });
  }
}

export default new Auth();
