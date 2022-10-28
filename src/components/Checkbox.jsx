import React, {useContext} from 'react'
import { CheckBoxContext } from './context/CheckBoxContext'

const Checkbox = () => {
    const context = useContext(CheckBoxContext)

  return (
    <div>
    <label>
        <input type="checkbox"
            value={context.checked}
            onChange={context.handleChange}
            />
       <p>My value checked ? {context.checked.toString()} </p> 
       <p>Completion ? {context.completion.toString()}</p>
    </label>
    </div>
  )
}

export default Checkbox