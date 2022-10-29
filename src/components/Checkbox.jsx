import React, {useContext, useState, useRef} from 'react'
import {CheckBoxContext} from './context/CheckBoxContext'
import useLocalStorage from './LocalStorage'

const Checkbox = (props) => {
  // const [check, setCheck] = useState(false)
  const [checked, setChecked] = useLocalStorage(props.id, false)
  console.log("What's here?", checked)
  const [complete, setComplete] = useState(0)
  const [text, setText] = useState("Lesson Completed!")
  const checkedRef = useRef(checked)
  const context = useContext(CheckBoxContext)


  const handleChange = () =>{
    console.log("handle change", checked)
    checkedRef.current.value= !checked
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
    <div className='checkbox'>
      <label >
      {console.log(checked)}
          <input type="checkbox"
              id = {props.id}
              ref= {checkedRef}
              value={checked}
              onChange={handleChange}
              />
        <p>My value checked ? {checked.toString()} </p> 
        <p>Completion ? {complete.toString()}</p>
        <p>text? {text.toString()}</p>
        <p>completion? {context.completion.toString()}</p>
        <p>id? {props.id}</p>
      </label>
  </div>
  )
}

export default Checkbox