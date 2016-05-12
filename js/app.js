

'use strict';

var app = angular.module('wylewki', []).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'src/home.html', activetab: 'home', controller: HomeCtrl }).
        when('/o_nas', {
          templateUrl: 'src/o_nas.html',
          controller: AboutCtrl,
          activetab: 'about'
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });
  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);
