'use strict';

/**
 * @ngdoc overview
 * @name wbTestApp
 * @description
 * # wbTestApp
 *
 * Main module of the application.
 */
angular
  .module('wbTestApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .constant('apiKeys', {
    'walmart': '62j6vdngxjwdyjbj54kr4yh9'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/products/:productId', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
