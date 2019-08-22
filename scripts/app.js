'use strict';

/**
 * @ngdoc overview
 * @name vipresortsDestinationsApp
 * @description
 * # vipresortsDestinationsApp
 *
 * Main module of the application.
 */
angular
  .module('vipresortsDestinationsApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    //'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        activetab: 'about'
      })
      .when('/reservation', {
        templateUrl: 'views/reservation.html',
        controller: 'ReservationCtrl',
        controllerAs: 'reservation',
        activetab: 'reservation'
      })
      .when('/destinations', {
        templateUrl: 'views/destinations.html',
        controller: 'DestinationsCtrl',
        controllerAs: 'destinations',
        activetab: 'destinations'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactUsCtrl',
        controllerAs: 'contactus',
        activetab: 'contactus'
      })
      .when('/lookup', {
        templateUrl: 'views/lookup.html',
        controller: 'LookupCtrl',
        controllerAs: 'lookup',
        activetab: 'lookup'
      })
      .when('/domRep', {
        templateUrl: 'views/domRep.html',
        //controller: 'DomRepCtrl',
        controllerAs: 'domRep',
        activetab: 'destinations'
      })
      .when('/mex', {
        templateUrl: 'views/mex.html',
        //controller: 'MexCtrl',
        controllerAs: 'mex',
        activetab: 'destinations'
      })
      .when('/jamaica', {
        templateUrl: 'views/jamaica.html',
        //controller: 'JamaicaCtrl',
        controllerAs: 'jamaica',
        activetab: 'destinations'
      })
      .otherwise({
        redirectTo: '/'
      })
})
    .run(['$rootScope', '$location', function($rootScope, $location){
       var path = function() { return $location.path();};
       $rootScope.$watch(path, function(newVal, oldVal){
         $rootScope.activetab = newVal;
       });
  }]);
