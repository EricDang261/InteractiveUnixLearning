import React, {createContext, useContext} from 'react'
import MultipleChoice from '../components/MultipleChoice'
import { IntroMCQs } from '../components/IntroMCQs'

const Quiz = (props) => {


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

            {/* <MultipleChoice data={props.data} /> */}
        </div>
    </div>
  )
}

export default Quiz