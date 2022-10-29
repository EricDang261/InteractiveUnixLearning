import React, {useContext, useState} from 'react'
import {CheckBoxContext} from './context/CheckBoxContext'

const Checkbox = () => {
  const [checked, setChecked] = useState(false)
  const [complete, setComplete] = useState(0)
  const [text, setText] = useState("Lesson Completed!")

  const context = useContext(CheckBoxContext)



  const handleChange = () =>{
    setChecked(!checked)
    if(checked == false){
        setComplete(complete + 30)
        context.setCompletion(context.completion + 25)
        setText("Completed!")
    }
    
    if(checked == true){
        setComplete(complete-30)
        context.setCompletion(context.completion - 25)
        setText("Lesson Completed!")
    
    }

    
  }

  return (
<<<<<<< HEAD
    <div>
    <label>
        <input type="checkbox"
            value={context.checked}
            onChange={context.handleChange}
            />
       <p>My value checked ? {context.checked.toString()} </p> 
       <p>Completion ? {context.score.toString()}</p>
    </label>
    </div>
=======
    <div className='checkbox'>
      <label>
          <input type="checkbox"
              value={checked}
              onChange={handleChange}
              />
        <p>My value checked ? {checked.toString()} </p> 
        <p>Completion ? {complete.toString()}</p>
        <p>text? {text.toString()}</p>
        <p>completion? {context.completion.toString()}</p>
      </label>
  </div>
>>>>>>> cec23b29f9c6787ba7adb1010d1c17c2a46e476d
  )
}

export default Checkbox