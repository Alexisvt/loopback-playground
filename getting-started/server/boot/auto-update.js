'use strict';

module.exports = function(app) {
  app.dataSources.MySQL.autoupdate('Product', err => {
    if (err) {
      throw err;
    }
    console.log('Model Synced');
  });
};
