myApp.factory('questionsFactory', ['$http', function($http) {
    var factory = {};
    //: Index method
    factory.index = function(callback) {
        $http.get('/questions').then(function(returned_data) {
            callback(returned_data.data);
        });
    }
    //: Create question method
    factory.create = function(newquestion, callback) {
        $http.post('/questions', newquestion).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            }
        });
    }
    // //: Show method
    // factory.show = function(id, callback) {
    //     $http.get('/topic/' + id).then(function(returned_data) {
    //         callback(returned_data.data);
    //     });
    // }
    // //: Create topic method
    // factory.create = function(newtopic, callback) {
    //     $http.post('/topics', newtopic).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    // //: Create post method
    // factory.createPost = function(newpost, callback) {
    //     $http.post('/post', newpost).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    // //: Create comment method
    // factory.createComment = function(newcomment, callback) {
    //     $http.post('/comment', newcomment).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    // //: Upvote post
    // factory.upvotePost = function(postID, callback) {
    //     $http.put('/upvote/' + postID).then(function(returned_data) {
    //         callback(returned_data.data);
    //     });
    // }
    // //: Downvote post
    // factory.downvotePost = function(postID, callback) {
    //     $http.put('/downvote/' + postID).then(function(returned_data) {
    //         callback(returned_data.data);
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
    // //: Delete method
    // factory.delete = function(id, callback) {
    //     $http.delete('/friends/' + id).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    //: Return the object
    return factory;
}]);
