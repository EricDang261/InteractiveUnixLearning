import React, {useContext, useState} from 'react'
import { useEffect } from 'react'
import {CheckBoxContext} from './context/CheckBoxContext'
//import useLocalStorage from './LocalStorage'

const Checkbox = (props) => {
  // const [check, setCheck] = useState(false)
  // const [checked, setChecked] = useLocalStorage(props.id, false)
  const [isChecked , setIsChecked] = useState(JSON.parse(localStorage.getItem(props.id)) || false)
  // const [complete, setComplete] = useState(JSON.parse(localStorage.getItem(props.scoreId)) || 0)
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState("Lesson Completed!")
  const context = useContext(CheckBoxContext)


  useEffect(()=>{
    localStorage.setItem(props.id, JSON.stringify(isChecked));
  },[isChecked])

  useEffect(()=>{
    console.log("in here!")
    setLoading(false)
    localStorage.setItem("score", JSON.stringify(context.completion))
  },[context.completion])

 

  const handleChange = (e) =>{
    let checked = e.target.checked

    // localStorage.setItem(props.id, JSON.stringify(checked)) 

    if(checked){
          setIsChecked(!isChecked)
          // setComplete(complete + 25)
          context.setCompletion(context.completion + 25)

          setText("Completed!")
    }
    else{
        setIsChecked(false)
        // setComplete(complete-25)
        context.setCompletion(context.completion - 25)
        setText("Lesson Completed!")
    }  
  }

  if(loading) return(<h1>loading</h1>)

  return (
    <div className='checkbox'>
      <label >
          <input 
              id={props.id}
              type="checkbox"
              checked={isChecked}
              onChange={(e) => handleChange(e)}
              />
        {console.log("WHAT IS THIS?: ", context.completion)}
        <p>My value checked ? {isChecked.toString()} </p> 
        {/* <p>Complete ? {complete.toString()}</p> */}
        <p>text? {text.toString()}</p>
        <p>Context: {context.completion}</p>
        <p>completion? {localStorage.getItem("score")}</p>
        <p>id? {props.id}</p>
      </label>
  </div>
  )
}

export default Checkbox