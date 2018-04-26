'use strict';

angular.module('mean')
  .factory('Catalog', function ($resource) {
    return $resource('/api/catalogs/:id');
  });
