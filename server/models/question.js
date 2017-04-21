//: Require mongoose
var mongoose = require('mongoose');
//: Define schema variable
var Schema = mongoose.Schema;
//: Create Schema
var QuestionSchema = new mongoose.Schema({
    question : { type: String, required: true, minlength: 10 },
    answers : [{ type : Schema.Types.ObjectId, ref : 'Answer' }],
    user : { type: String },
    description : { type: String },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Question = mongoose.model('Question', QuestionSchema);
