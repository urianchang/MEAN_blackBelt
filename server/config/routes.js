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
        //: Show specific question
    app.get('/question/:id', function(req, res) {
        questions.show(req, res);
    });
    //     //: Add friend
    // app.post('/friends', function(req, res) {
    //   friends.create(req, res);
    // });
}
