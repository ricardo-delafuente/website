const production = process.env.NODE_ENV === 'production';

const config = {
  'process.env.NAMESPACE': production
    ? 'https://www.ricardo-delafuente.com'
    : 'http://localhost:3000',
  'process.env.CLIENT_ID': '3s6MX8CBL3n1xethqGrgt83eOSuP1g9C'
};

module.exports = config;
