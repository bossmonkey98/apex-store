import React from 'react'
import { Favorite,FavoriteBorderOutlined, ShoppingCart, Star } from '@material-ui/icons'
import './Card.css'
import { useAuth } from '../../context/auth-context'
import { useWishlist } from '../../context/wishlist-context'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/cart-context'


const Card = ({items}) => {
  const {wishlist,AddItemToWishlist,RemoveItemFromWishlist} =useWishlist()
  const {user}= useAuth()
  const navigator =useNavigate()
  const {cart, addToCart} = useCart()

  return (
    <div  className="vertical-card">
        <div className='img-container'><img className="vertical-card-img" src={items.img} alt=""/></div>
        <span className="card-badge">{items.rating}{<Star id='star' />}</span>
          
          {/*wishlist*/}

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
              {!cart.find((prod)=>items._id === prod._id)?
              <button className='btn' onClick={()=>addToCart(items)} >
                  Add to Cart <ShoppingCart/>
              </button>
              :<button className='btn' onClick={()=>navigator("/cart")} >
                  Go to Cart <ShoppingCart/>
                </button>
              }   
          </div>
    </div>
  )
}

export {Card}