
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './form.css'

const LoginForm = ({ Login,  error}) => {
  const [details, setDetails] = useState({name: "", email: "", password: ""});
  const navigate = useNavigate();

  const submitHandler = e =>{
    e.preventDefault();
    Login(details);

  }

  return (
    <div className= "form-container" >
    <form onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>Login</h2>
    {(error !=="") ? (<div className="error"> {error} </div>) : "" } 

              <div className="form-group">
                  <label htmlFor="name"> Name: </label>
                  <input type="text" name="name" id="name" onChange={ e => setDetails({...details , name: e.target.value})} value={details.name}  />
              </div>  {/* end of the form-group div */}    

              <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="email"  onChange={ e => setDetails({...details , email: e.target.value})} value={details.emails} />
              </div> {/* end of the form-group div */}

              <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" id="password"  onChange={ e => setDetails({...details , password: e.target.value})} value={details.password} />
              </div> {/* end of the form-group div */}

              <input type="submit" value="LOGIN" />  
              <button className="sign_up_btn" onClick={() => navigate("/SignUp")}> Sign Up </button> 
          </div> {/* end of the form innter div */}
        </form>
  </div>  
  )
}

export default LoginForm