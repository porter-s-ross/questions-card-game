import React, { useState } from "react";
import '../App.css';

// import QuestionCard from "./QuestionCard";


const Deck = (props) => {

    const Obj = props.questions;
    const questionsList = Obj.questions;

    console.log(questionsList)

    const questions = [];
    // const [questions, setQuestions] = useState([]);

    const getQuestions = () => {
        for (var i = 0; i < questionsList.length; i++) {
            // console.log(questionsList[i].question)
            questions.push(questionsList[i].question)
        }
        return questions;

    }

    const newQuestionsList = (getQuestions());
    // console.log(newQuestionsList)



    const shuffleList = () => {
        var randomList = []
        var count = 0;

        while (true) {
            var x = Math.random() * newQuestionsList.length;
            var y = x.toFixed();
            y = parseInt(y);

            if (!(randomList.includes(newQuestionsList[y])) && y <= newQuestionsList.length - 1) {
                randomList.push(newQuestionsList[y])
                count++
            }

            if (count == newQuestionsList.length) {
                break;
            }
        }
        return randomList
    }

    const shuffledDeck = shuffleList();
    console.log(shuffledDeck);

    

    const processFrontCard = (event) => {
        
        // if([...event.target.classList].includes('cardFront')){
        //     event.target.parentElement.classList.toggle('is-flipped')
        // }
        // else {
        //     event.target.parentElement.classList.add('slide')
        //     // event.target.parentElement.classList.remove('is-flipped')
        // }
        event.target.parentElement.classList.add('is-flipped')
        console.log(event.target)
        
    }

    const processBackCard =(event) => {
        event.target.parentElement.classList.add('slide')
        console.log(event.target)

    }


    return (
        <div>
            <button className="btn btn-primary btn-small m-2">See all questions</button>
            <div className="deck">
                {
                    shuffledDeck.map((question, i) => {
                        return <div key={i} className="card">
                            <div className="cardFront" onClick={processFrontCard}></div>
                            <div className="cardBack " onClick={processBackCard}>
                                <h3 className="cardText">Q: {question} </h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Deck;