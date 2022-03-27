import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div>
          <div className="subscribe">
            <h1>SIGN UP FOR THE MAILING</h1>
            <p> TO BE THE FIRST TO HEAR ABOUT EXCITING STORE ANNOUNCEMENT</p>
            <input type="text" placeholder="Enter Name"/>
            <input type="email" placeholder="Enter Email (e.g abc@mail.com)"/>
        </div>
    </div>
  )
}

export default Newsletter
