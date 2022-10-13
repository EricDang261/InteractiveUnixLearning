import React from 'react'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup_content">
            <button className="close_btn">Close</button>
            {props.children}
        </div>
    </div>
  ):"";
}

export default Popup