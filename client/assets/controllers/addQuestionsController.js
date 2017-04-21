//: Add Questions Controller
myApp.controller('addQuestionsController', ['$scope', 'usersFactory', 'questionsFactory', '$location', function ($scope, usersFactory, questionsFactory, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        console.log('good to go @ adding question');
        $scope.error = false;
        // $scope.sortType = 'created_at';
        // $scope.sortReverse = true;
        $scope.user = usersFactory.user;
        // var index = function() {
        //     questionsFactory.index(function(data) {
        //         // console.log(data);
        //         $scope.questions = data;
        //     });
        // }
        // index();
        $scope.create = function() {
            // console.log($scope.newQuestion);
            // if ($scope.newTopic === undefined) {
            //     $scope.error = true;
            //     $scope.validationErrors = [{message: "Please submit valid inputs"}];
            // } else {
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
            // }
        }
    }
}]);
