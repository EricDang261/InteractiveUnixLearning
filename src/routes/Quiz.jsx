import React from 'react'
import MultipleChoice from '../components/MultipleChoice'
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Quiz = (props) => {
  return (props.trigger) ? (
    <div className="quiz">
      <button className="close" onClick={() => props.setTrigger(false)}>
        <Link to="#" className="close_icon">
          <AiOutlineClose />
        </Link>
      </button>
      <div className="multiple_choice">
        <MultipleChoice d={props.data} />
      </div>
    </div>
  ) : "";
}

export default Quiz
