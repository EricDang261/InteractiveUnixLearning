import React from 'react'
import * as AiIcons from "react-icons/ai"
import "./Popup.css"

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div className={props.className}>
            <button className="close_btn" onClick={() =>props.setTrigger(false)}><AiIcons.AiOutlineClose/></button>
            <p className="popup_text">{props.text}</p>
            <img className="popup_img" src={props.img}></img>
        </div>
    </div>
  ):"";
}

export default Popup