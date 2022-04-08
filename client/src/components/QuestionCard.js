import React from "react";
import '../App.css';


const QuestionCard = (props) => {

    
    return(
        <div className="card">
            <div className="cardFront"></div>
            <div className="cardBack">
                <h3 className="cardText">Q: {props.question}</h3>
            </div>
        </div>
    )
}

export default QuestionCard;