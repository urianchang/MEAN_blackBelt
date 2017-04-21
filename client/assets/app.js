var myApp = angular.module('myApp', ['ngRoute']);

//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardController'
    })
    .when('/new_question', {
        templateUrl: 'partials/add_question.html',
        controller: 'addQuestionsController'
    })
    .when('/question/:id', {
        templateUrl: 'partials/show_question.html',
        controller: 'showQuestionsController'
    })
    .when('/question/:id/new_answer', {
        templateUrl: 'partials/add_answer.html',
        controller: 'addAnswersController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
