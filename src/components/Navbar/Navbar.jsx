import { AccountCircleOutlined, ExitToApp, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import logo from '../../assets/logo/apex-legends-symbol-white.png'
import './Navbar.css'
import {NavLink ,useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
import { useWishlist } from '../../context/wishlist-context'
import {useCart} from '../../context/cart-context'
import { Badge } from '@material-ui/core'
import {LogoutHandler} from '../../services/auth/Loghandler'


export const Navbar = () => {
  const {user,setUser } =useAuth();
  const {pathname}=useLocation()
  const {wishlist} = useWishlist();
  const {cart}= useCart()

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
              <NavLink to="/products">Products</NavLink>
          </div>
        </div>
          <div className='search-bar'>
            <input className="query" type="search" id="query" placeholder="Search Product"/>
            <Search/>
          </div> 
            <div className='all-icons' >
              <div className="icon">
                {!user.isUserLoggedIn?
                    <NavLink to="/login"><AccountCircleOutlined fontSize='large'/></NavLink>:
                    <NavLink to="/" ><ExitToApp onClick={()=>LogoutHandler(setUser)}/></NavLink>
                }
              </div>
              <div className="icon">
                    <NavLink to="/wishlist">
                    <Badge badgeContent={wishlist.length} color="secondary">
                      <FavoriteBorderOutlined fontSize='large'/>
                      </Badge></NavLink>
              </div>
              <div className="icon">
                  <NavLink to= "/cart">
                  <Badge badgeContent={cart.length} color="secondary">
                    <ShoppingCartOutlined fontSize='large'/>
                    </Badge></NavLink>
              </div>
            </div>
      </nav>
    </div>
  )
}



