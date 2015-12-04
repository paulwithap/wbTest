'use strict';

/**
 * @ngdoc function
 * @name wbTestApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the wbTestApp
 */
angular.module('wbTestApp')
  .controller('ProductsCtrl', function ($scope, $http, apiKeys) {
    $scope.hasSearched = false;

    var validateInput = function(input) {
        input = input;
        return true;
    };

    $scope.getProducts = function(productQuery) {
        if (validateInput(productQuery)) {
            $http.jsonp('http://api.walmartlabs.com/v1/search?apiKey=' + apiKeys.walmart +
                '&query=' + productQuery + '&numItems=20' + '&callback=JSON_CALLBACK')
                .then(function success(response) {
                    console.log('success!');
                    console.log(response);
                    $scope.products = response.data.items;
                    $scope.productTotal = response.data.totalResults;
                    $scope.hasSearched = true;
                }, function error(response) {
                    console.log('error');
                    console.log(response);
                    $scope.hasSearched = true;
                });
        } else {

        }
    };
  });
