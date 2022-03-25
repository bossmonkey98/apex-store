import { AccountCircleOutlined, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import logo from '../../assets/logo/apex-legends-symbol-white.png'
import './Navbar.css'
import {Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
            <span><img className="store-logo" src={logo} alt="logo"/></span>
            <span className="store-name">pex Store</span>
        </div>
        <div className="menu">
          <div>
             <Link to="/">Home</Link>
          </div>
          <div>
              <Link to="/Products">Products</Link>
          </div>
        </div>
          <div className='search-bar'>
            <input className="query" type="search" id="query" placeholder="Search Product"/>
            <Search/>
          </div> 
            <div className='all-icons' >
              <div className="icon">
                    <Link to="/Login"><AccountCircleOutlined fontSize='large'/></Link>
              </div>
              <div className="icon">
                    <Link to="/Wishlist"><FavoriteBorderOutlined fontSize='large'/></Link>
              </div>
              <div className="icon">
                  <Link to= "/Cart"><ShoppingCartOutlined fontSize='large'/></Link>
              </div>
            </div>
      </nav>
    </div>
  )
}



