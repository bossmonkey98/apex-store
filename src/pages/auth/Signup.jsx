import React, { useState } from 'react'
import './auth.css'
import {Link ,useNavigate} from 'react-router-dom'
import { SignUpHandler } from '../../services/auth/SignupHandler'
import {useAuth} from '../../context/auth-context'

export default function Signup() {
    const navigator = useNavigate()
    const {user,setUser} = useAuth()
    const [SignInUser,setSignInUser] =useState({firstName:'',lastName:'',email:'',password:''})
  return (
    <div>
        <div className="form-container" >
            <form className="form" onSubmit={(e)=>{e.preventDefault();SignUpHandler(SignInUser,setUser,navigator)}}>
                <h1 className="form-heading" >Sign Up</h1>
                <input
                    type="text"
                    name="Name"
                    placeholder="Enter Your First Name" onChange={(e)=>setSignInUser({...SignInUser,firstName:e.target.val})}/>
                <input className="email"
                    type="text" 
                    name="LastName"
                    placeholder="Enter Your Last Name" onChange={(e)=>setSignInUser({...SignInUser,lastName:e.target.value})}/>
                <input className="input"
                    type="email" 
                    name="email"
                    placeholder="Enter Your E-mail" onChange={(e)=> setSignInUser({...SignInUser,email:e.target.value})}/>
                <input className="input"
                    type="password" 
                    name="password"
                    placeholder="Enter Password" onChange={(e)=>setSignInUser({...SignInUser,password:e.target.value})}/>     
                    <button className="btn">Sign Up</button>
                    <p>Already have an account?</p>
                    <Link to ="/login" style={{textDecoration:"none"}}>
                        <button className='btn'> LogIn </button>
                    </Link>
            </form>
        </div>
    </div>
  )
}
