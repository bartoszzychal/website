var app = angular.module('social', []);
app.controller('socialCntrl', function ($window,$scope) {
  $scope.redirectToFB = function(){
         $window.location.href = 'https://www.facebook.com/';
  }
  $scope.redirectToGoogle = function(){
         $window.location.href = 'https://www.google.com/';
  }
});
