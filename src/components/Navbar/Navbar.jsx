import { AccountCircleOutlined, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import logo from '../../assets/logo/apex-legends-symbol-white.png'
import './Navbar.css'
import { Routes, Link ,Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import { Cart } from '../../pages/Cart/Cart'
import { Wishlist } from '../../pages/Wishlist/Wishlist'
import {Login} from '../../pages/auth/Login'
import {ProductListing} from '../../pages/Productlisting/ProductListing'

function Navbar(){
  return(
    <div>
          <nav className="nav-bar">
        <div className="logo">
            <span><img id="store-logo" src={logo} alt="logo"/></span>
            <span id="store-name">pex Store</span>
        </div>
        <div className="menu">
            <span><Link to="/">Home</Link></span>
            <span>
               <Link to="/Products">Products</Link>
            </span>
        </div>
        <div className="nav-content">
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
        </div>
    </nav>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<ProductListing/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/' element={<Wishlist/>}/>
      <Route path='/' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default Navbar

