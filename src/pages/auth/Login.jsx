import React, { useState } from 'react'
import './auth.css'
import { Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../context/auth-context'
import {LogInHandler} from '../../services/auth/Loghandler'


export default function Login() {
  const {user,setUser} =useAuth()
  const [loguser,setLoguser] =useState({email:'',pass:''})
  const guestUser ={
    email:'adarshbalika@gmail.com',
    pass:'adarshbalika',
  }
  const navigator =useNavigate()
  return (
     <div>
       <div className="form-container">
         <form className="form" onSubmit={(e)=>{e.preventDefault();LogInHandler(loguser,setUser,navigator)}}>
             <h1 className="form-heading">LOGIN</h1>
             <input className='input'
                 type="text"
                 name="username"
                 placeholder="Enter Email" onChange={(e)=>setLoguser({...loguser,email:e.target.value})}/>
             <input className="input"
                 type="password" 
                 name="password"
                 placeholder="Enter Password" onChange={(e)=>setLoguser({...loguser,pass:e.target.value})}/>
                 <p className='log-cred' style={{cursor:"context-menu"}}>
                   <span><input type ="radio"/>Remember me</span>
                    <span>Forget Password?</span></p>
             <div className='log-btn'><button className="btn" type='submit'>
                  Login
              </button>
              <button className='btn' onClick={(e)=>{e.preventDefault();LogInHandler(guestUser,setUser,navigator)}}>
                Login as Guest
              </button></div>
              No Account?<Link to='/signup' style={{textDecoration:'none'}}><button className='btn'>CreatOne</button></Link>
         </form>
       </div>
     </div>
  )
}

