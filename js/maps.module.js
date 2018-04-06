
var app = angular.module('maps', []);
app.controller('mapCntrl', function ($window,$scope) {
  $scope.xy= [ 51.548885, 19.958246 ];
  $scope.redirectToGoogleMaps = function(){
         $window.location.href = 'https://goo.gl/maps/6rbkeeedPW92';
  }
});
