'use strict';

module.exports = function(app) {
  const { MySQL } = app.dataSources;
  const { Book, Author } = app.models;

  MySQL.autoupdate('Product', err => {
    if (err) {
      throw err;
    }
    console.log('Product table Synced');
  });

  MySQL.autoupdate('Company', err => {
    if (err) {
      throw err;
    }
    console.log('Company table Synced');

    MySQL.autoupdate('Account', err => {
      if (err) {
        throw err;
      }
      console.log('Account table Synced');
    });
  });

  MySQL.autoupdate('Author', err => {
    if (err) {
      throw err;
    }
    console.log('Author table Synced');

    MySQL.autoupdate('Book', err => {
      if (err) {
        throw err;
      }
      console.log('Book table Synced');
    });
  });
};
