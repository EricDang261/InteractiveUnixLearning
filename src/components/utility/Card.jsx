import React from 'react'
import {Link} from 'react-router-dom'

import './Card.css' 

export const Card = (props) => {
  return (
    <div className="card">
        <div className="cardBody">
            <Link to={props.path}>
            <img className="card_pic"src={props.img} alt="course cover"/>
            <h2 className="cardTitle">{props.title}</h2>
            <p className="cardDescr">{props.descr}</p>
            </Link>
        </div>
    </div>
  )
}
export default Card
