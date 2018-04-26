/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('./api/user/user.model');
var Product = require('./api/product/product.model');
var Catalog = require('./api/catalog/catalog.model');
var mainCatalog, home, books, clothing, Phones;

// User.find({}).removeAsync()
//   .then(function() {
//     User.createAsync({
//       provider: 'local',
//       name: 'Test User',
//       email: 'test@test.com',
//       password: 'test'
//     }, {
//       provider: 'local',
//       role: 'admin',
//       name: 'Admin',
//       email: 'admin@admin.com',
//       password: process.env.ADMIN_PASSWORD || 'admin'
//     })
//     .then(function() {
//       console.log('finished populating users');
//     });
//   });

Catalog
  .find({})
//   .remove()
//   .then(function () {
//     return Catalog.create({ name: 'All'});
//   })
//   .then(function (catalog) {
//     mainCatalog = catalog;
//     return mainCatalog.addChild({name: 'Phones'});
//   })
//   .then(function (category) {
//     Phones = category._id; 
//     // return mainCatalog.addChild({name: 'Books'});
//   })
//   // .then(function (category) {
//   //   books = category._id;
//   //   return mainCatalog.addChild({name: 'Clothing'});
//   // })
//   // .then(function (category) {
//   //   clothing = category._id;
//   //   return Product.find({}).remove({});
//   // })
//   .then(function() {
//     return Product.create({
//       title: 'Iphone 7s',
//       imageUrl: '/assets/uploads/apple-iphone-7',
//       price: 250,
//       stock: 1,
//       categories: [Phones],
//       description: 'Used Iphone 7s'
//     }, 
//     {
//       title: 'Iphone 7s',
//       imageUrl: '/assets/uploads/apple-iphone-7',
//       price: 250,
//       stock: 1,
//       categories: [Phones],
//       description: 'Used Iphone 7s'
//     },
//     {
//       title: 'Iphone 7s',
//       imageUrl: '/assets/uploads/apple-iphone-7',
//       price: 250,
//       stock: 1,
//       categories: [Phones],
//       description: 'Used Iphone 7s'
//     },
//     {
//       title: 'Iphone 7s',
//       imageUrl: '/assets/uploads/apple-iphone-7',
//       price: 250,
//       stock: 1,
//       categories: [Phones],
//       description: 'Used Iphone 7s'
//     }
//   );
//   })
  .then(function () {
    console.log('Finished populating Products with categories');
  })
  .then(null, function (err) {
    console.error('Error populating Products & categories: ', err);
  });
