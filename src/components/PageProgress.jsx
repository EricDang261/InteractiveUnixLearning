import React from 'react'

const PageProgress = (props) => {
    let completion = JSON.parse(localStorage.getItem("completion"));
    if (!completion){
      completion = 0;
    }
      
      const Childdiv = {
        width: `${completion}%`,
      }
      

  return (
    <div className={props.outer}>
      <span className={props.text}>Module Completion {`${completion}%`}</span>
      <div style={Childdiv} className={props.inner}>
      </div>
    </div>
  )
}

export default PageProgress