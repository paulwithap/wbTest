'use strict';

/**
 * @ngdoc function
 * @name wbTestApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the wbTestApp
 */
angular.module('wbTestApp')
  .controller('ProductCtrl', function ($scope, $http, $routeParams, apiKeys) {
    $scope.product = {};
    $scope.reviews = [];
    $scope.isLoaded = false;
    $scope.hasError = false;

    var getProduct = function() {
        $http.jsonp('http://api.walmartlabs.com/v1/items/' + $routeParams.productId +
            '?apiKey=' + apiKeys.walmart + '&format=json&callback=JSON_CALLBACK')
            .then(function success(response) {
                console.log(response.data);
                $scope.product = response.data;
                $scope.isLoaded = true;
            }, function error(response) {
                console.log(response.data);
                $scope.hasError = true;
                $scope.isLoaded = true;
            });
    };

    var init = function() {
        getProduct();
    };

    $scope.getReviews = function() {
        $http.jsonp('http://api.walmartlabs.com/v1/reviews/' + $routeParams.productId +
            '?apiKey=' + apiKeys.walmart + '&format=json&callback=JSON_CALLBACK')
            .then(function success(response) {
                console.log(response.data);
                $scope.reviews = response.data.reviews;
            }, function error(response) {
                console.log(response.data);
            });
    };

    init();
  });
