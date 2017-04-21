//: Show Questions Controller
myApp.controller('showQuestionsController', ['$scope', 'usersFactory', 'questionsFactory', '$routeParams', '$location', '$route', function ($scope, usersFactory, questionsFactory, $routeParams, $location, $route) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        console.log('good to go @ showing question');
        $scope.success;
        $scope.user = usersFactory.user;
        var show = function() {
            if (questionsFactory.success.length > 0) {
                $scope.success = questionsFactory.success.pop().success;
            }
            questionsFactory.show($routeParams.id, function(returnedData){
                // console.log(returnedData);
                // console.log(typeof(returnedData.answers[0].likes));
                if (returnedData.name === "CastError") {
                    $location.url('/');
                } else {
                    $scope.question = returnedData;
                }
            });
        }
        show();
        $scope.like = function(answer) {
            questionsFactory.like(answer, function(returnedData) {
                // console.log(returnedData);
                show();
            });
        }
    }
}]);
