import React, { useState } from 'react'
import "./MultipleChoice.css"
import { IntroMCQs } from './IntroMCQs'

const MultipleChoice = (d) => {

    //properties section
    const [showFinalRes, setFinalRes] = useState(false)
    const [score, setScore] = useState(0)
    const [currQuestion, setQuestion] = useState(0)

    //helper functions
    const restartMC = ()=>{
        setScore(0)
        setQuestion(0)
        setFinalRes(false)
    }


    const optionClicked = (isCorrect) =>{
        if(isCorrect){
            setScore(score + 1)
        }
        if(currQuestion + 1 < Object.keys(d).length){
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
                    <h2>{score} out of {d} correct - ({(score/d.length)*100}%)</h2>

                    <button className="mc_restart" onClick={()=>restartMC()}>Restart</button>


                </div>

                :
                //else false and show cards
                <div className="mc_questions">
                    <h2 className="mc_score"> Current Score: {score}</h2>
                    <h2>Question {currQuestion + 1} out of {d.length}</h2>
                    <h3 className='question_text'>{d[currQuestion].text}</h3>
                    <ul className="question_choices">
                        {d[currQuestion].options.map((option)=>{
                            return(
                                <li onClick={()=>optionClicked(option.isCorrect)}key={option.id}>{option.text}</li>
                            )
                        })}

                    </ul>
                </div>
            }

        </div>
    )
}

export default MultipleChoice