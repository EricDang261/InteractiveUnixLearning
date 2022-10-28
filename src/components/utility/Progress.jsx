import React from 'react'
import "./Progress.css"

const Progress = () => {
    let scrollPercentage=() =>{
        let scrollProgress = document.getElementById("progressbar")
        let progressVal = document.getElementById("progress_val")
        let pos = document.documentElement.scrollTop
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let scrollVal = Math.round(pos * 100/calcHeight)
        console.log("what is this??", scrollVal)
        scrollProgress.style.background = `conic-gradient(rgb(124, 255, 124) ${scrollVal}%, #696969 ${scrollVal}%)`
        progressVal.textContent=`${scrollVal}%`
      }
      window.onscroll = scrollPercentage
      window.onload = scrollPercentage

  return (
    <div id="progressbar">
          <span id="progress_val"></span>
    </div>
  )
}

export default Progress