//: Edit Friend Controller
myApp.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function ($scope, friendsFactory, $routeParams, $location) {
    $scope.error = false;
    friendsFactory.show($routeParams.id, function(returnedData){
        // console.log(returnedData);
        if (returnedData.name === "CastError") {
            $location.url('/');
        } else {
            returnedData.birthday = new Date(returnedData.birthday);
            $scope.friend = returnedData;
        }
    });
    $scope.update = function() {
        if ($scope.friend) {
            // $scope.friend._id = $scope.friend._id;
            // console.log($scope.friend);
            friendsFactory.update($scope.friend, function(returnedData) {
                // console.log(returnedData);
                if (returnedData.name === "ValidationError") {
                    $scope.error = true;
                    $scope.validationErrors = returnedData.errors;
                } else {
                    // console.log('from edit controller', returnedData);
                    $location.url('/');
                }
            });
        }
    };
}]);
