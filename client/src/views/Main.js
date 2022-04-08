import axios from 'axios';
import React, { useEffect, useState } from 'react';


// import QuestionCard from '../components/QuestionCard';
import Deck from '../components/Deck';

const Main = (props) => {
    const [questions, setQuestions] = useState({})
    // const [question, setQuestion] = useState({})
    const [loaded,setLoaded] = useState(false);

    useEffect (() => {
            axios.get("http://localhost:8000/api/question/")
                .then(res => {
                    setQuestions(res.data)
                    setLoaded(true);
                })
                .catch(err => console.log(err));
        }, [])



    return (
        <div className='main'>
            
            { 
            loaded && <Deck questions={questions}/>
            }
        </div>
    )
}

export default Main;