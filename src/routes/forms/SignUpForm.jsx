
import React from 'react'
import {Link} from 'react-router-dom'

const SignUpForm = () => {

  return (
    <div className= "form-container" >
    <form>
          <div className="form-inner">
              <h2>User Register</h2>

              <div className="form-group">
                  <label htmlFor="name"> Name: </label>
                  <input type="text" name="name" id="name"/>
              </div>  {/* end of the form-group div */}    

              <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="email"/>
              </div> {/* end of the form-group div */}

              <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" id="password"  />
              </div> {/* end of the form-group div */}

              <div className="form-group">
                  <label htmlFor="password">Re-type Password: </label>
                  <input type="password" name="password" id="password"  />
              </div> {/* end of the form-group div */}

              <input type="submit" value="REGISTER" />  
              <div className='link-btn'>
                 Already have an account? <Link to="/login">Log In</Link>
            </div>
          </div> {/* end of the form innter div */}
    </form>
  </div> /* end of the form-group div */ 
  )
}
export default SignUpForm