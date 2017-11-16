'use strict';

module.exports = function(app) {
  app.dataSources.MySQL.autoupdate('Product', err => {
    if (err) {
      throw err;
    }
    console.log('Product table Synced');
  });

  app.dataSources.MySQL.autoupdate('Company', err => {
    if (err) {
      throw err;
    }
    console.log('Company table Synced');
  });

  app.dataSources.MySQL.autoupdate('Account', err => {
    if (err) {
      throw err;
    }
    console.log('Account table Synced');
  });
};
