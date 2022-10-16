import React, {useContext} from 'react'
import { ValueContext } from '../store/ValueContext'
import './Category.css'

const Category = () => {
  const context = useContext(ValueContext)

  return (
      <div className="dropdown-container">
        <form onSubmit={context.handleSubmit}>
          <label>
            Categories:
            <select onChange={context.handleChange}> 
              <option value="Unix-intro">Unix Introduction</option>
              <option value="File-management">File Management</option>
              <option value="Environment">Environment</option>
              <option value="Advanced-commands">Advanced Commands</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
   
  )
}

export default Category
