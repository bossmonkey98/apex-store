import { AccountCircleOutlined, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import logo from '../../assets/logo/apex-legends-symbol-white.png'
import './Navbar.css'
import {NavLink ,useLocation } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { useWishlist } from '../context/wishlist-context'


export const Navbar = () => {
  const {user ,setUser} =useAuth();
  const {pathname}=useLocation()
  const {wishlist} = useWishlist();
  const NavStyles = ({isActive})=>{
    return {color:isActive?'red':'white'} 
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
            <span><img className="store-logo" src={logo} alt="logo"/></span>
            <span className="store-name">pex Store</span>
        </div>
        <div className="menu">
          <div>
             <NavLink to="/" >Home</NavLink>
          </div>
          <div>
              <NavLink to="/Products">Products</NavLink>
          </div>
        </div>
          <div className='search-bar'>
            <input className="query" type="search" id="query" placeholder="Search Product"/>
            <Search/>
          </div> 
            <div className='all-icons' >
              <div className="icon">
                    <NavLink to="/Login"><AccountCircleOutlined fontSize='large'/></NavLink>
              </div>
              <div className="icon">
                    <NavLink to="/Wishlist"><FavoriteBorderOutlined fontSize='large'/></NavLink>
              </div>
              <div className="icon">
                  <NavLink to= "/Cart"><ShoppingCartOutlined fontSize='large'/></NavLink>
              </div>
            </div>
      </nav>
    </div>
  )
}



