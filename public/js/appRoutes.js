
angular.module('mean')
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    $stateProvider
    .state('home',{
         url: '/home',
         templateUrl:'views/home.html'
     })
     .state('products', {
        url: '/products',
        templateUrl: 'views/templates/product-list.html',
        controller: 'ProductsCtrl'
      })
      .state('newProduct', {
        url: '/products/new',
        templateUrl: 'views/templates/product-new.html',
        controller: 'ProductNewCtrl',
        authenticate: 'admin'
      })

      .state('viewProduct', {
        url: '/products/:id/view',
        templateUrl: 'views/templates/product-view.html',
        controller: 'ProductViewCtrl'
      })

      .state('editProduct', {
        url: '/products/:id/edit',
        templateUrl: 'views/templates/product-edit.html',
        controller: 'ProductEditCtrl'
        // authenticate: 'admin'
      })

      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/templates/products-checkout.html',
        controller: 'ProductCheckoutCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        authenticate: 'admin'
      })

      .state('onlyAdmin', {
        url: '/admin-access',
        templateUrl: 'views/only-admin.html'
      })
      .state('productCatalog', {
        url: '/products/:slug/catalog',
        templateUrl: 'views/templates/product-list.html',
        controller: 'ProductCatalogCtrl'
      });

         $locationProvider.html5Mode(true);

});
