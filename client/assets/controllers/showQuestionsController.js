//: Show Questions Controller
myApp.controller('showQuestionsController', ['$scope', 'usersFactory', 'questionsFactory', '$routeParams', '$location', function ($scope, usersFactory, questionsFactory, $routeParams, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        console.log('good to go @ showing question');
        // $scope.error = false;
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
    }
}]);
