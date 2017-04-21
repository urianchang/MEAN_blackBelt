var myApp = angular.module('myApp', ['ngRoute']);

//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/all.html',
        controller: 'newController'
    })
    .when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'newController'
    })
    .when('/edit/:id', {
        templateUrl: 'partials/edit.html',
        controller: 'editController'
    })
    .when('/show/:id', {
        templateUrl: 'partials/show.html',
        controller: 'editController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
