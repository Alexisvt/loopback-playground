'use strict';

module.exports = function(Product) {
  Product.validatesUniquenessOf('name', { message: 'name is not unique' });
};
