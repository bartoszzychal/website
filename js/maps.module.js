
var app = angular.module('maps', []);
app.controller('mapCntrl', function ($window,$scope) {
  $scope.points = [
      { "name": "Pietrzyk Wylewki", "latitude": 51.548861 , "longitude": 19.958231},
  ];
  $scope.redirectToGoogleMaps = function(){
         $window.location.href = 'https://goo.gl/maps/6rbkeeedPW92';
  }
});
