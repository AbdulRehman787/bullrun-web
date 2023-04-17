import React, { useState } from 'react';
import './style.css';
import InputControl from './InputControl';
import { Link ,useNavigate} from 'react-router-dom';
import  { auth } from '../Config/fire'
import {signInWithEmailAndPassword} from 'firebase/auth';


function Login(){
  const navigate= useNavigate();

  const [errmsg,setErrorMsg] = useState()
  const [submitbuttondisabled, setSubmitbuttondisabled] = useState(false)
  const [values,setValues] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = ()=>{
    if(!values.email || !values.password){
      setErrorMsg("Fills All Data");
      return
    }
    if(values.email ==="admin@gmail.com" || values.password=== "dmvin34infvv"){
      navigate('../Admin/Admin');
      return
    }
    setErrorMsg("")
    setSubmitbuttondisabled(true)
    signInWithEmailAndPassword(auth,values.email,values.password)
    .then(res=>{
    setSubmitbuttondisabled(false)
    navigate('../Pages/Home')
    })
    .catch(err=>{
      setErrorMsg(err.message)
    setSubmitbuttondisabled(false)

    })

    console.log(values);
  }
    return (
    <>
      <div className="containa">
        <div className="innerBox">
          <h1 className="heading">Login</h1>
          <form>
              <InputControl label="Email" name="email" required placeholder="Enter Your Email"
                onChange={event => setValues((prev) => ({ ...prev, email: event.target.value }))} 
                />
                <InputControl label="Password" required name="password" type="password" placeholder="Enter Your Password"
                  onChange={event => setValues((prev) => ({ ...prev, password: event.target.value }))}
                  />
              
          <div className="footer">
          <b className='error'>{errmsg}</b>
            <button onClick={handleSubmit} 
            disabled={submitbuttondisabled}>Signup</button>
            <p>Already Have an account <span><Link to="/registration/Signup">Signup</Link></span> </p>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;