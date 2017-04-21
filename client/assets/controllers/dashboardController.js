//: Dashboard Controller
myApp.controller('dashboardController', ['$scope', 'usersFactory', 'questionsFactory', '$location', function ($scope, usersFactory, questionsFactory, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        console.log('good to go @ dashboard');
        $scope.success;
        $scope.user = usersFactory.user;
        var index = function() {
            if (questionsFactory.success.length > 0) {
                $scope.success = questionsFactory.success.pop().success;
            }
            questionsFactory.index(function(data) {
                // console.log(data);
                $scope.questions = data;
            });
        }
        index();
    }
}]);
