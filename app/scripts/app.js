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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
