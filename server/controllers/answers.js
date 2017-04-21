//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {
    // index: function(req, res) {
    //     Friend.find({}, function(err, friends) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(friends);
    //         }
    //     });
    // },
    create: function(req, res) {
        Question.findOne({_id: req.params.id}, function(err, question) {
            if (err) {
                res.json(err);
            } else {
                var answer = new Answer({
                    user: req.body.user,
                    answer: req.body.answer,
                    details: req.body.details
                });
                answer._question = question._id;
                question.answers.push(answer._id);
                answer.save(function(err) {
                    if (err) {
                        res.json(err);
                    } else {
                        question.save(function(err) {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json({success: 'Answer successfully added!'});
                            }
                        });
                    }
                });
            }
        });
    },
    // update: function(req,res){
    //     // console.log(req.body);
    //     Friend.update({_id: req.body._id},
    //         {$set: {first_name: req.body.first_name,
    //                 last_name: req.body.last_name,
    //                 birthday: req.body.birthday}
    //         },
    //         { runValidators: true },
    //         function(err) {
    //             if (err) {
    //                 res.json(err);
    //             } else {
    //                 res.json({success: 'User successfully updated!'});
    //             }
    //         }
    //     );
    // },
    // delete: function(req,res){
    //     Friend.remove({_id: req.params.id}, function(err) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json({success: 'User successfully deleted!'});
    //         }
    //     });
    // },
    // show: function(req,res){
    //     Friend.findOne({_id: req.params.id}, function(err, friend) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(friend);
    //         }
    //     });
    // }
}
