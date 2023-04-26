//const { createProxyMiddleware } = require('http-proxy-middleware');
//import axios from "axios";
//axios.defaults.baseURL = 'https://localhost:8282/';

/*module.exports = function(app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://localhost:8282', // Remplacez l'URL par votre URL de backend
      changeOrigin: true,
      pathRewrite: {
        '^/api/v1': ''
      }
      
    })
  );
};*/

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8282',
      changeOrigin: true,
    })
  );
};
