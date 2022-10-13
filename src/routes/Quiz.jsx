import React from 'react'
import MultipleChoice from '../components/MultipleChoice'

const Quiz = (props) => {
  console.log("WHat is this?", props)
  return (
    <div className = "quiz">
        <div className="multiple_choice">

            <MultipleChoice data={props} />
        </div>
    </div>
  )
}

export default Quiz
