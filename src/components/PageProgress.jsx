import React from 'react'

const PageProgress = (props) => {
    const completion = JSON.parse(localStorage.getItem("completion"));
      
      const Childdiv = {
        width: `${completion}%`,
      }
      

  return (
    <div className={props.outer}>
      <div style={Childdiv} className={props.inner}>
        <span className={props.text}>Module Completion {`${completion}%`}</span>
      </div>
    </div>
  )
}

export default PageProgress