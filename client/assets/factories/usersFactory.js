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
    // //: Index method
    // factory.index = function(callback) {
    //     $http.get('/customers').then(function(returned_data) {
    //         customers = returned_data.data;
    //         callback(customers);
    //     });
    // }
    //: Show method
    // factory.show = function(id, callback) {
    //     $http.get('/user/' + id).then(function(returned_data) {
    //         callback(returned_data.data);
    //     });
    // }
    //: Create method
    // factory.create = function(newcustomer, callback) {
    //     $http.post('/customers', newcustomer).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    // //: Update method
    // factory.update = function(friend, callback) {
    //     $http.put('/friends/' + friend._id, friend).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    //: Delete method
    // factory.delete = function(id, callback) {
    //     $http.delete('/customers/' + id).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    //: Return the object
    return factory;
}]);
