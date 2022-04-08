const Question = require("../models/question.model")

module.exports = {
    
    // test response
    index: (request, response) => {
        response.json({
            message: "Hello World"
        })
    },

    // Find responses
    findAll: (request, response) => {
        Question.find()
            .then(allQuestions => response.json({ questions: allQuestions }))
            .catch(err => response.status(400).json({ message: 'Something went wrong', err }))
    },

    findOne: (request, response) => {
        Question.findOne({ _id: request.params.id })
            .then(question => response.json(question))
            .catch(err => response.json({ message: 'Something went wrong', err }))
    },

    // create response
    createQuestion: (request, response) => {
        const {question} = request.body;
        
        Question.create({
            question
        })
            .then(question => {
                console.log(request.body);
                response.json(question)
            })
            .catch(err => response.status(400).json({ message: 'Something went wrong', err }))
    },

    // update response

    updateQuestion: (request, response) => {
        Question.updateOne({ _id: request.params.id }, request.body, {new:true, runValidators: true})
            .then(updatedQuestion => response.json(updatedQuestion))
            .catch(err => response.status(400).json({ message: 'Something went wrong', err }))
    },


    // delete response
    deleteQuestion: (request, response) => {
        Question.deleteOne({ _id: request.params.id })
            .then(confirmDelete => response.json(confirmDelete))
            .catch(err => response.status(400).json({ message: 'Something went wrong', err }))
    },
}