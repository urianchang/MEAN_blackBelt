//: Add Answers Controller
myApp.controller('addAnswersController', ['$scope', 'usersFactory', 'questionsFactory', '$routeParams', '$location', function ($scope, usersFactory, questionsFactory, $routeParams, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        console.log('good to go @ adding answer');
        $scope.error = false;
        $scope.user = usersFactory.user;
        $scope.newAnswer = {};

        var show = function() {
            questionsFactory.show($routeParams.id, function(returnedData){
                // console.log(returnedData);
                if (returnedData.name === "CastError") {
                    $location.url('/');
                } else {
                    $scope.question = returnedData;
                }
            });
        }
        show();

        $scope.create = function() {
            var newAnswer = $scope.newAnswer;
            newAnswer.user = $scope.user.user_name;
            newAnswer.question_id = $scope.question._id;
            questionsFactory.createAnswer(newAnswer, function(data) {
                // console.log(data)
                if (data.name === "ValidationError") {
                    $scope.error = true;
                    $scope.validationErrors = data.errors;
                } else {
                    $scope.newAnswer = {};
                    $location.url('/dashboard');
                }
            });
        }

        $scope.clear = function() {
            $scope.newAnswer = {};
            $location.url('/dashboard');
        }
    }
}]);
