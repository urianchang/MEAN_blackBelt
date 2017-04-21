myApp.factory('questionsFactory', ['$http', function($http) {
    var factory = {};
    factory.success = [];
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
                if (returned_data.data.success) {
                    factory.success.push(returned_data.data);
                }
                callback(returned_data.data);
            }
        });
    }
    //: Show method
    factory.show = function(id, callback) {
        $http.get('/question/' + id).then(function(returned_data) {
            callback(returned_data.data);
        });
    }
    //: Create answer method
    factory.createAnswer = function(newanswer, callback) {
        // console.log('/question/' + newanswer.question_id);
        $http.post('/question/' + newanswer.question_id, newanswer).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                if (returned_data.data.success) {
                    factory.success.push(returned_data.data);
                }
                callback(returned_data.data);
            }
        });
    }
    //: Like method
    factory.like = function(answer, callback) {
        $http.put('/answer/'+answer._id, answer).then(function(returned_data) {
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
