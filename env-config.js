const production = process.env.NODE_ENV === 'production';

const config = {
  'process.env.NAMESPACE': production
    ? 'https://www.ricardo-delafuente.com'
    : 'http://localhost:3000'
};

module.exports = config;
