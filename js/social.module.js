var app = angular.module('social', []);
app.controller('socialCntrl', function ($window,$scope) {
  $scope.redirectToFB = function(){
         $window.location.href = 'https://web.facebook.com/WylewkiBetonowePietrzyk';
  };
  $scope.redirectToGoogle = function(){
         $window.location.href = 'https://www.google.com/';
  };
  $scope.redirectToFGZ = function(){
         $window.location.href = 'http://www.firmagodnazaufania.pl/show,42077,pphu-pietrzyk';
  };
});
