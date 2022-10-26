import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import React, { useState, useEffect } from 'react'


const Progressbar = () => {
  const [percentage, setPercentage] = useState(0);

    return (
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbarWithChildren value={percentage}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img style={{ width: 50, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>{percentage}%</strong> mate
        </div>
        </CircularProgressbarWithChildren>
    </div>
    );
}

export default Progressbar