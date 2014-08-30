(function () {
    'use strict';

    /**
     * @ngdoc overview
     * @name showsApp
     * @description
     * # showsApp
     *
     * Main module of the application.
     */
    angular
    var myApp = angular.module('showsApp', []);
    var MainController = function ($scope, $http) {

        var onUsercomplete = function (response) {
            $scope.movies = response.data;
        };
        var onError = function (reason) {
            $scope.error = " Could not fetch movies";
        };

        $scope.search = function (username) {
            $http.get("https//api.github.com/user/angular")
                      .then(onUsercomplete, error);

        };

        $scope.username = 'angular';
      
    }

    myApp.controller('GreetingController', ['$scope', '$http', GreetingController]);

}());




/*var myApp = angular.module('showsApp', []);
myApp.controller('GreetingController', ['$scope', function ($scope, $http) {
    $scope.greeting = 'Hola!';
 


    myApp.controller
}]);*/