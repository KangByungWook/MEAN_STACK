var products = require('../../app/controllers/products.server.controller');

module.exports = function(app){
  app.route('/products').get(products.index);
}
