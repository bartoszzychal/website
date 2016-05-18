

'use strict';

var app = angular.module('wylewki', ['ngMap','maps','ngRoute','ngAnimate','social']).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'src/home.html', activetab: 'home', controller: HomeCtrl }).
        when('/o_nas', {
          templateUrl: 'src/o_nas.html',
          controller: AboutCtrl,
          activetab: 'about'
        }).
        when('/oferta', {
          templateUrl: 'src/oferta.html',
          controller: OfferCtrl,
          activetab: 'offer'
        }).
        when('/realizacje', {
          templateUrl: 'src/realizacje.html',
          controller: RealizationsCtrl,
          activetab: 'realizations'
        }).
        when('/rekomendacje', {
          templateUrl: 'src/rekomendacje.html',
          controller: RecommendationsCtrl,
          activetab: 'recommendations'
        }).
        when('/kontakt', {
          templateUrl: 'src/kontakt.html',
          controller: ContactCtrl,
          activetab: 'contact'
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {
      $scope.loaded = false;
      $scope.appliedClass = function(myObj) {
        if ($scope.loaded === "false") {
          return "";
        } else {
          return "slide"; // Or even "", which won't add any additional classes to the element
        }
      };
        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });
  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);
