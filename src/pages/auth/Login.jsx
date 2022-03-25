import React from 'react'
import './auth.css'
import { Link} from 'react-router-dom'

export default function Login() {
  return (
     <div>
       <div className="form-container">
         <form className="form">
             <h1 className="form-heading">APEX STORE / LOGIN</h1>
             <input
                 type="text"
                 name="username"
                 placeholder="Enter Username"/>
             <input className="input"
                 type="password" 
                 name="password"
                 placeholder="Enter Password"/>
                 <p style={{cursor:"context-menu"}}><input type ="radio"/>Remember me Forget Password?</p>
             <button className="btn">Login</button>
              No Account?<Link to='/Signup'>CreatOne</Link>
         </form>
       </div>
     </div>
  )
}

