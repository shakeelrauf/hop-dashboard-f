const { createProxyMiddleware } = require('http-proxy-middleware');

const authOptions = {
  target: 'https://p-dev.kangaroohealth.com/', 
  changeOrigin: true, 
  pathRewrite: {
    '^/auth-api': '/v2oauth',
  },
};

const profileOptions = {
  target: 'https://p-dev.kangaroohealth.com',
  changeOrigin: true,
  pathRewrite: {
    '^/profile-api': '/v2',
  }
};
 
const authProxy = createProxyMiddleware(authOptions);
const profileProxy = createProxyMiddleware(profileOptions);
 
module.exports = function(app) {
  app.use('/auth-api', authProxy);
  app.use('/profile-api', profileProxy);
} ;