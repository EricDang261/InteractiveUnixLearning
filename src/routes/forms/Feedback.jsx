import React from 'react'
import emailjs from 'emailjs-com'

const Feedback = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_uvgw7ai', 
                    'template_11inkne', 
                    e.target, 
                    "9Fn7kdQ5gIBk4kE6S" )
                    .then(res=> {
                      console.log(res)})
                    .catch(err => console.log(err))
  }

  return (
    <div className= "form-container" >
    <form onSubmit={sendEmail}>
          <div className="form-inner">
              <h2>Feedback</h2>

              <div className="form-group">
                  <label htmlFor="name"> Name: </label>
                  <input type="text" name="name" id="name"/>
              </div>    

              <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="user_email" id="user_email"/>
              </div> 

              <div className="form-group">
                 <label htmlFor="message"> Message: </label>
                 <textarea name="message" rows="4"></textarea>
                 <input style={{marginTop: "30px"}} type="submit" value="Send" />

              </div> 

            
          </div> 
    </form>
  </div>
  )
}

export default Feedback