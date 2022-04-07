import React from 'react'
import { useCart } from '../../components/context/cart-context'
import { useAuth } from '../../components/context/auth-context'
import { useWishlist } from '../../components/context/wishlist-context'
import './Cart.css'
import { priceCalculater } from '../../components/cartFunctions/pricecalculator'

export  function Cart(){
  const { cart, removeItemFromCart , updateCartValue} = useCart()
  const {user} = useAuth()
  const {wishlist,AddItemToWishlist,RemoveItemFromWishlist} =useWishlist()
  let totalcartvalue = 0
  if(cart.length>0){
    totalcartvalue = priceCalculater(cart)
  }
  console.log(totalcartvalue)
  return (
    <div className='cart-container'>
     
     <div>
     <h1 style={{margin:'10px'}}> Your Cart Items</h1>
    {cart.length !=0?
    <div className='cart-items-container'>
     {cart.map((items)=>(
      <div className="cart-card" key={items._id}>
      {console.log(items)}
     <img src={items.img} className='cart-img'/>
      <div className="cart-content">
          <h2>Title: {items.title}</h2>
          <p>Description:
            <br/>{items.desc}</p>
          <p>Price: ${items.price}</p>
          <div className='qty-content'>
            <button className='mybtn' onClick={()=>{updateCartValue(items._id,"increment")}}>+</button>
              Quantity: {items.qty}
            {items.qty>0 && <button className='mybtn' onClick={()=>{updateCartValue(items._id,"decrement")}}>-</button>}
          </div>
          <div className='cart-btns'>
            <button onClick={()=>removeItemFromCart(items._id,user)} className='btn'>Remove From Cart</button>
            {wishlist.find((item)=>items._id ===item._id)?
            <button className='btn' onClick={()=>RemoveItemFromWishlist(items._id,user)}>Remove From Wishlist</button>
            :<button className='btn' onClick={()=>
              {
                if(user.isUserLoggedIn){
                    AddItemToWishlist(items,user)
                    removeItemFromCart(items._id,user)
                  }
                else{
                  alert("Login In to Continue")
                  // navigator("/login")
                  }
                }}>Move To WishList</button>}
          </div>
      </div>
    </div>
    )
    )}
     </div>:
     <h1>Oops your cart is empty -_- browse products and add items to cart</h1>}
      </div>     
     <div>
     <h1 style={{margin:'10px'}}>Cart Value</h1>
     <div className='cart-value'>
     <div><p><strong>ITEMS</strong></p><span>{cart.length}</span></div>
            <div><p><strong>Price</strong></p><span>{totalcartvalue.total}</span></div>
            <div><p><strong>GST</strong></p><span>10%</span></div>
            <div><p><strong>Total</strong></p><span>{totalcartvalue.totalprice}</span></div>
            <button class="cart-btn">CHECKOUT</button>
     </div>
     </div>
    </div>
  )
}
