import React from 'react'
import MultipleChoice from '../components/MultipleChoice'
import {AiOutlineClose} from "react-icons/ai"

const Quiz = (props) => {
  return (props.trigger)?(
    <div className = "quiz">
        <button className="close" onClick={() =>props.setTrigger(false)}><AiOutlineClose/></button>
        <div className="multiple_choice">
        <MultipleChoice d = {props.data}/>   
        </div>
    </div>
  ):"";
}

export default Quiz
