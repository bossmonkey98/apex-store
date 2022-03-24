import React from 'react'
import './auth.css'

export const Signup = () => {
  return (
    <div>
        <div class="form-container">
            <form class="form">
                <h1 class="form-heading">APEX STORE / SIGN UP</h1>
                <input
                    type="text"
                    name="Name"
                    placeholder="Enter Your Full Name"/>
                <input class="email"
                    type="email" 
                    name="email"
                    placeholder="Enter Your e-mail"/>
                <input class="input"
                    type="password" 
                    name="password"
                    placeholder="Enter Password"/>
                <input class="input"
                    type="password" 
                    name="password"
                    placeholder="Confirm Password"/>
                <button class="btn">Sign Up</button>
            </form>
        </div>
    </div>
  )
}
