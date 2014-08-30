'use strict';

/**
 * @ngdoc function
 * @name showsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showsApp
 */
angular.module('showsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
