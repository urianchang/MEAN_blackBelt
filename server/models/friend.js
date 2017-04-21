//: Require mongoose
var mongoose = require('mongoose');
//: Create Schema
var FriendSchema = new mongoose.Schema({
    first_name : { type: String, required: true, minlength: 4 },
    last_name : { type: String, required: true, minlength: 4 },
    birthday : { type: Date, required: true },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Friend = mongoose.model('Friend', FriendSchema);
