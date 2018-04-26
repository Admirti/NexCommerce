angular.module('mean',
 [
//  'ngRoute',
//  'MainCtrl',
//  'Products',
 'ngCookies',
 'ngResource',
 'ngSanitize',
 'btford.socket-io',
 'ui.router',
 'ui.bootstrap',
 'ngFileUpload',
 'ngCart',
 'braintree-angular'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $httpProvider.interceptors.push('authInterceptor');
  })

.factory('authInterceptor', function($rootScope, $q, $cookies, $injector) {
    var state;
    return {
      // Add authorization token to headers
      request: function(config) {
        config.headers = config.headers || {};
        if ($cookies.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookies.get('token');
        }
        return config;
      }
    }});
