import React, { useState } from 'react'
import { Favorite,FavoriteBorderOutlined, ShoppingCart, Star } from '@material-ui/icons'
import './Card.css'
import { useAuth } from '../../components/context/auth-context'
import { useWishlist } from '../../components/context/wishlist-context'
import { useNavigate } from 'react-router-dom'



const Card = ({items}) => {
  const {wishlist,AddItemToWishlist,RemoveItemFromWishlist} =useWishlist()
  const {user}= useAuth()
  const navigator =useNavigate()
  

  return (
    <div key={items._id} className="vertical-card">
        <img className="vertical-card-img" src={items.img} alt=""/>
        <span className="card-badge">{items.rating}{<Star id='star' />}</span>
        {wishlist.find((prod)=>prod._id ===items._id)?
        (<span className="card-badge-fav" onClick={()=>
          RemoveItemFromWishlist(items._id,user)
          }><Favorite fontSize='large'/></span>)
        :<span className="card-badge-fav" onClick={()=>{
          if(user.isUserLoggedIn){
          AddItemToWishlist(items,user)
          }
          else{
            alert("Please Login to continue!!!")
            navigator("/login")}}}><FavoriteBorderOutlined fontSize='large'/></span>}
        <div className="vertical-card-content">
            <h3>{items.title}</h3>
            <p>Price: ${items.price}</p>
            <button className='btn'>Add to Cart <ShoppingCart/> </button>
        </div>
    </div>
  )
}

export {Card}