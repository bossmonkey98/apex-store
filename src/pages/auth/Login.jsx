import React from 'react'
import './auth.css'

export const Login = () => {
  return (
     <div>
       <div class="form-container">
         <form class="form">
             <h1 class="form-heading">APEX STORE / LOGIN</h1>
             <input
                 type="text"
                 name="username"
                 placeholder="Enter Username"/>
             <input class="input"
                 type="password" 
                 name="password"
                 placeholder="Enter Password"/>
                 <p style={{cursor:"context-menu"}}><input type="checkbox"/>Remember me Forget Password?</p>
             <button class="btn">Login</button>
             <p>No Account? Create One</p>
         </form>
       </div>
     </div>
  )
}
