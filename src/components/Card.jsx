import React from 'react'
import {Link} from 'react-router-dom'

import './Card.css' 

export const Card = (props) => {
  return (
    <div className="card">
        <div className="cardBody">
            <img src={props.img}/>
            <h2 className="cardTitle">{props.title}</h2>
            <p className="cardDescr">{props.descr}</p>
        </div>
        <button className="CardBtn">Button</button>
    </div>
  )
}
export default Card
