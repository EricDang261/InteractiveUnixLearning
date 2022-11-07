import React, {useRef, useState, useContext} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {useAuth} from "../../components/context/AuthContext" 
import {UsernameContext} from "../../components/context/UsernameContext"

const SignUpForm = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const context = useContext(UsernameContext)

  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
     
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      context.setUsrName(nameRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (
    <div className= "form-container" >
        {error && alert(error) } 
      <form onSubmit={handleSubmit}>
            <div className="form-inner">
                <h2>User Register</h2>

                <div className="form-group">
                    <label htmlFor="name"> Name: </label>
                    <input type="text" name="name" id="name" ref={nameRef}/>
                </div>  {/* end of the form-group div */}    

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" ref={emailRef}/>
                </div> {/* end of the form-group div */}

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" ref={passwordRef} />
                </div> {/* end of the form-group div */}

                <div className="form-group">
                    <label htmlFor="password">Re-type Password: </label>
                    <input type="password" name="password" id="retype-password" ref={passwordConfirmRef}  />
                </div> {/* end of the form-group div */}

                <input disabled={loading} type="submit" value="REGISTER" />  
                <div className='link-btn'>
                  Already have an account? <Link to="/login">Log In</Link>
              </div>
            </div> {/* end of the form innter div */}
      </form>
    </div>


    
  )
}
export default SignUpForm