import React, { useState } from 'react'
import "./MultipleChoice.css"
import { IntroMCQs } from './IntroMCQs'

const MultipleChoice = ({d}) => {

    //properties section
    const [showFinalRes, setFinalRes] = useState(false)
    const [score, setScore] = useState(0)
    const [currQuestion, setQuestion] = useState(0)
    const [incorrectAns, setIncorrect] = useState([])

    //helper functions
    const restartMC = ()=>{
        setScore(0)
        setQuestion(0)
        setFinalRes(false)
        setIncorrect([])
    }

    function getAnswer(){
        for (var option in d[0][currQuestion].options){
            if (d[0][currQuestion].options[option].isCorrect == true){
                return d[0][currQuestion].options[option].text
            }
        }
    }

    function updateIncorrect(newItem){
        var temp = incorrectAns
        temp.push(newItem)
        return setIncorrect(temp)
    }


    const optionClicked = (isCorrect) =>{
        if(isCorrect){
            setScore(score + 1)
        }
        if(currQuestion + 1 < d[0].length){
            setQuestion(currQuestion + 1)
        }
        else{
            setFinalRes(true)
        }
  
    }
     
    return (

        <div className='mc_components'>
            {showFinalRes ?

                //if true show results
                <div className="mc_results">
                    <h1 className="mc_results_header">Final Results</h1>
                    <h3 className="mc_score">{score} out of {d[0].length} correct - ({(score/d[0].length)*100}%)</h3>
                    <h2 className="mc_incorrect_title">Correct Answers</h2>
                    <p>Number of incorrect answers: {incorrectAns.length}</p>
                    <ul className = "mc_incorrect_list">
                    {
                        incorrectAns.map((question) =>{
                            return(
                                <li>Question: {question[0]} <br/> Answer: {question[1]}</li>
                            )
                        })
                    }
                    </ul>
                    <button className="mc_restart" onClick={()=>restartMC()}>Restart</button>

                </div>

                :
                //else false and show cards
                <div className="mc_questions">
                    <h2 className="mc_score"> Current Score: {score}</h2>
                    <h2>Question {currQuestion + 1} out of {d[0].length}</h2> 
                    <ul className="question_choices">
                    {  

                        d[0][currQuestion].options && 
                        d[0][currQuestion].options.map((option)=>{
                        return(
                            <li onClick={()=>optionClicked(option.isCorrect)}key={option.id}>{option.text}</li>
                        )})
                        
                    }
                    </ul>
                </div>
            }

        </div>
    )
}

export default MultipleChoice