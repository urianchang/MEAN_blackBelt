//: Add Questions Controller
myApp.controller('addQuestionsController', ['$scope', 'usersFactory', 'questionsFactory', '$location', function ($scope, usersFactory, questionsFactory, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        console.log('good to go @ adding question');
        $scope.error = false;
        $scope.user = usersFactory.user;
        $scope.newQuestion = {};
        $scope.create = function() {
            var newQuestion = $scope.newQuestion;
            newQuestion.user = $scope.user.user_name;
            questionsFactory.create(newQuestion, function(data) {
                // console.log(data)
                if (data.name === "ValidationError") {
                    $scope.error = true;
                    $scope.validationErrors = data.errors;
                } else {
                    $scope.newQuestion = {};
                    $location.url('/dashboard');
                }
            });
        }
        $scope.clear = function() {
            $scope.newQuestion = {};
            $location.url('/dashboard');
        }
    }
}]);
