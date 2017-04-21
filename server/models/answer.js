//: Require mongoose
var mongoose = require('mongoose');
//: Define schema variable
var Schema = mongoose.Schema;
//: Create Schema
var AnswerSchema = new mongoose.Schema({
    user : { type: String, required: true},
    _question : { type : Schema.Types.ObjectId, ref : 'Question' },
    answer : { type: String, required: true, minlength: 2 },
    details : { type: String },
    likes : { type: Number, default: 0 },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Answer = mongoose.model('Answer', AnswerSchema);
