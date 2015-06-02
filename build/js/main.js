var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

//    $locationProvider.hashPrefix('!');
//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'AppController'
    });
    $routeProvider.when('/inner/:id', {
        templateUrl: 'views/inner.html',
        controller: 'AppInnerController'
    });
    $routeProvider.otherwise({
        templateUrl: 'views/home.html'
    });

}]);
app.controller('AppController', ['$scope', function ($scope) {
    console.log('AppController');
}]);
app.controller('AppInnerController', ['$scope', function ($scope) {
    console.log('AppInnerController');
}]);