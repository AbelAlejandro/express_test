'use strict';

/**
 * @ngdoc function
 * @name expressTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the expressTestApp
 */
angular.module('expressTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
