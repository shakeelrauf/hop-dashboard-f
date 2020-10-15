const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://p-dev.kangaroohealth.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v2oauth'
      }
    })
  );
};