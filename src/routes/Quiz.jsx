import React from 'react'
import MultipleChoice from '../components/MultipleChoice'

const Quiz = (props) => {

  return (
    <div className = "quiz">
        <div className="multiple_choice">

            <MultipleChoice data={props.data} />
        </div>
    </div>
  )
}

export default Quiz
