//: Dashboard Controller
myApp.controller('dashboardController', ['$scope', 'usersFactory', 'questionsFactory', '$location', function ($scope, usersFactory, questionsFactory, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        console.log('good to go @ dashboard');
        $scope.user = usersFactory.user;
        var index = function() {
            questionsFactory.index(function(data) {
                // console.log(data);
                $scope.questions = data;
            });
        }
        index();
    }
}]);
