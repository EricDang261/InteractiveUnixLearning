import React, {useContext, useState} from 'react'
import { useEffect } from 'react'
import {CheckBoxContext} from './context/CheckBoxContext'
//import useLocalStorage from './LocalStorage'

const Checkbox = (props) => {
  const [isChecked , setIsChecked] = useState(JSON.parse(localStorage.getItem(props.id)) || false)
  const [text, setText] = useState("Lesson Completed!")
  const context = useContext(CheckBoxContext)

  useEffect( () => {
      const completion = JSON.parse(localStorage.getItem("completion"))
      if(completion){
        context.setCompletion(completion)
      }
  }, [])

  useEffect( () => {
      localStorage.setItem("completion", JSON.stringify(context.completion))
  }, [context.completion])

  useEffect(()=>{
    localStorage.setItem(props.id, JSON.stringify(isChecked));
  },[isChecked])
 
  if(context.completion === undefined) return <h1>checkbox loading...</h1>


  const handleChange = (e) =>{
    let checked = e.target.checked

    if(checked){
          setIsChecked(!isChecked)
          context.setCompletion(context.completion + 25)
          setText("Completed!")
    }
    else{
        setIsChecked(false)
        context.setCompletion(context.completion - 25)
        setText("Lesson Completed!")
        
    }   
  }

  return (
    <div className='checkbox'>
      <label >
          <input 
              id={props.id}
              type="checkbox"
              checked={isChecked}
              onChange={(e) => handleChange(e)}
              />
        <p>text? {text.toString()}</p>
        <p>completion? {context.completion.toString()}</p>
      </label>
  </div>
  )
}

export default Checkbox