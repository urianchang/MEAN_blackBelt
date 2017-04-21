//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var User = mongoose.model('User');

module.exports = {
    login: function(req, res) {
        // console.log(req.body);
        User.findOne({user_name : req.body.user_name}, function(err, user) {
            if (err) {
                res.json(err);  //: Unable to reach database?
            } else {
                if (user === null) {
                    // console.log('create new user');
                    var newUser = new User({
                        user_name: req.body.user_name
                    });
                    newUser.save(function(err) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(newUser);
                        }
                    });
                } else {
                    // console.log('user exists');
                    res.json(user);
                }
            }
        });
    },
    // index: function(req, res) {
    //     Friend.find({}, function(err, friends) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(friends);
    //         }
    //     });
    // },
    // create: function(req, res) {
    //     var friend = new Friend({
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         birthday: req.body.birthday
    //     });
    //     friend.save(function(err) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json({success: 'User successfully created!'});
    //         }
    //     });
    // },
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
