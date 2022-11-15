import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


const SemiCircleProgress = () => {
    let completion = JSON.parse(localStorage.getItem("completion"));
    if (!completion){
      completion = 0;
    }

    // Function for calc color change
    const calcColor=(percent, start, end) =>{
        let decimal = percent/100;
        let b = (end - start) * decimal;
        let position = b + start;

        //retun CSS hsl color string
        return "hsl(" + position + ", 100%, 50%)";
    }
  return (
    <div>
        <CircularProgressbar
            value={completion}
            text= {`${completion}%`}
            circleRatio={0.7}
            styles={{
                trail: {
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center"
                },
                path:{
                    strokeLinecap: "butt",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                    stroke: calcColor(completion, 0, 120)
                },
                text:{
                    fill: "white"
                }
            }}
            strokeWidth={4}
        />
    </div>
  )
}

export default SemiCircleProgress