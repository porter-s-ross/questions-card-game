const { findAll, findOne, createQuestion, updateQuestion, deleteQuestion } = require('../controllers/question.controller');
const Question = require("../models/question.model")
module.exports = app => {
    app.route("/api/question/").get(findAll).post(createQuestion)
    app.route("/api/question/:id").get(findOne).patch(updateQuestion).delete(deleteQuestion)
}