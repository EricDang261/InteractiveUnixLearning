import React, { useState } from 'react'
import "./MultipleChoice.css"

const MultipleChoice = ({d}) => {

    //properties section
    const [showFinalRes, setFinalRes] = useState(false)
    const [score, setScore] = useState(0)
    const [currQuestion, setQuestion] = useState(0)
    const [incorrectAns, setIncorrect] = useState([])
    const [correctAns, setCorrect] = useState([])

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

    function updateCorrect(newItem){
        var temp = correctAns
        temp.push(newItem)
        return setCorrect(temp)
    }

    function updateIncorrect(newItem){
        var temp = incorrectAns
        temp.push(newItem)
        return setIncorrect(temp)
    }


    const optionClicked = (isCorrect) =>{
        if(isCorrect){
            setScore(score + 1)
            var temp = new Array()
            temp.push(d[0][currQuestion].text)
            temp.push(getAnswer())
            updateCorrect(temp)
        }
        else{
            var temp = new Array()
            temp.push(d[0][currQuestion].text)
            temp.push(getAnswer())
            updateIncorrect(temp)
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
                    <p className="incorrect_num">Number of incorrect answers: {incorrectAns.length}</p>
                    <ul className = "mc_incorrect_list">
                    {
                        incorrectAns.map((question) =>{
                            {console.log("WHY:",question)}
                            return(
                                <li><span>Question:</span> {question[0]} <br/> <span>Answer:</span> {question[1]}</li>
                            )
                        })
                    }
                    </ul>
                    <p className="correct_num">Number of correct answers: {correctAns.length}</p>
                    <ul className="mc_correct_list">
                        {
                            correctAns.map((question)=>{
                                return(
                                    <li><span>Question:</span> {question[0]} <br/> <span>Answer:</span> {question[1]}</li>
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
                    <p>{d[0][currQuestion].text}</p>
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