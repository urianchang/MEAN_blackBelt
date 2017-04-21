//: Create friend factory
// console.log('Friends factory');
myApp.factory('friendsFactory', ['$http', function($http) {
    var friends = [];
    var factory = {};
    factory.success = [];
    //: Index method
    factory.index = function(callback) {
        $http.get('/friends').then(function(returned_data) {
            friends = returned_data.data;
            callback(friends);
        });
    }
    //: Show method
    factory.show = function(id, callback) {
        $http.get('/friends/' + id).then(function(returned_data) {
            callback(returned_data.data);
        });
    }
    //: Create method
    factory.create = function(newfriend, callback) {
        $http.post('/friends', newfriend).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                if (returned_data.data.success) {
                    factory.success.push(returned_data.data);
                }
                callback(returned_data.data);
            }
        });
    }
    //: Update method
    factory.update = function(friend, callback) {
        $http.put('/friends/' + friend._id, friend).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                if (returned_data.data.success) {
                    factory.success.push(returned_data.data);
                }
                callback(returned_data.data);
            }
        });
    }
    //: Delete method
    factory.delete = function(id, callback) {
        $http.delete('/friends/' + id).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                if (returned_data.data.success) {
                    factory.success.push(returned_data.data);
                }
                callback(returned_data.data);
            }
        });
    }
    //: Return the object
    return factory;
}]);
