 angular.module('wylewki').directive('footer', function () {
    'use strict';
     return {
       restrict: 'A',
       replace: true,
       templateUrl: "/src/footer.html",
       controller: ['$scope', '$filter', function ($scope, $filter) {

        }]
    };
 });
