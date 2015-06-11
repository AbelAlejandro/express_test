'use strict';

/**
 * @ngdoc function
 * @name expressTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expressTestApp
 */
angular.module('expressTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
