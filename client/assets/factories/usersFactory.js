myApp.factory('usersFactory', ['$http', function($http) {
    var factory = {};
    factory.user = {};
    factory.userstatus = false;
    //: Login / Registration method
    factory.login = function(name, callback) {
        $http.post('/user', name).then(function(returned_data) {
            // console.log(returned_data.data);
            if (returned_data.data.name === "ValidationError") {
                callback(returned_data.data)
            } else {
                factory.user = returned_data.data;
                factory.userstatus = true;
                if (typeof(callback) == 'function') {
                    callback({success : true});
                }
            }
        });
    }
    //: Return the object
    return factory;
}]);
