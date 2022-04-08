const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: [true, "Question is required"],
        minlength: [8, "Question must be at least 8 characters long"]
    }

}, {timestamps:true})

const Question = mongoose.model("Question", QuestionSchema)
module.exports = Question
