import React from 'react'
import MultipleChoice from '../components/MultipleChoice'
import { IntroMCQs } from '../components/IntroMCQs'

const Quiz = (data) => {
  return (
    <div className = "quiz">
        <div className="multiple_choice">
        {/* {IntroMCQs.map((item, index) => (
          <div key={index}>
            <h1>{item.text}</h1>
            {item.options.map((c, i) => (
              <div key={i}>
                <h3>{c.text}</h3>
                <h3>{c.isCorrect}</h3>
                <hr />
              </div>
            ))}
          </div>
        ))} */}
        <MultipleChoice d = {data.data}/>   
        </div>
    </div>
  )
}

export default Quiz
