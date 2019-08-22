'use strict';

/**
 * @ngdoc function
 * @name vipresortsDestinationsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vipresortsDestinationsApp
 */
var vipApp= angular.module('vipresortsDestinationsApp', [])
  vipApp.controller('VipCtrl', function ($scope, $location) {
        $scope.isActive = function(route) {
        return route === $location.path();
    }
  });
