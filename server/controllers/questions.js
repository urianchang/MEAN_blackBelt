//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Question = mongoose.model('Question');

module.exports = {
    index: function(req, res) {
        Question.find({}, function(err, questions) {
            if (err) {
                res.json(err);
            } else {
                res.json(questions);
            }
        });
    },
    create: function(req, res) {
        var question = new Question({
            question: req.body.question,
            description: req.body.description,
            user: req.body.user
        });
        question.save(function(err) {
            if (err) {
                res.json(err);
            } else {
                res.json({success: 'User successfully created!'});
            }
        });
    },
    show: function(req,res){
        Question.findOne({_id: req.params.id})
            .populate('answers')
            .exec(function (err, question) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(question);
                }
            }
        );
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
}
