var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');

module.exports = function(app){
        //: Login / Register user
    app.post('/user', function(req, res) {
        users.login(req, res);
    });
        //: Show all questions
    app.get('/questions', function(req, res) {
        questions.index(req, res);
    });
        //: Add question
    app.post('/questions', function(req, res) {
        questions.create(req, res);
    });
    //     //: Show all friends
    // app.get('/friends', function(req, res) {
    //   friends.index(req, res);
    // });
    //     //: Show specific friend
    // app.get('/friends/:id', function(req, res) {
    //   friends.show(req, res);
    // });
    //     //: Add friend
    // app.post('/friends', function(req, res) {
    //   friends.create(req, res);
    // });
    //     //: Update friend
    // app.put('/friends/:id', function(req, res) {
    //   friends.update(req, res);
    // });
    //     //: Delete friend
    // app.delete('/friends/:id', function(req, res) {
    //   friends.delete(req, res);
    // });
}
