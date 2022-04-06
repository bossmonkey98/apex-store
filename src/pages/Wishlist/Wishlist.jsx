import React from 'react'
import { useWishlist } from '../../components/context/wishlist-context'
import {Card} from '../../components/Card/Card'
import './Wishlist.css'

export  function Wishlist(){
  const { wishlist } = useWishlist()

  return (
    <div className='wishlist-Container' >
      {wishlist.length ===0? <>
        <h1>Oops Your List is Empty Browse Products</h1>
      </>:<><h1>Your WishList Items</h1>
      <div className='wishlist-content'>
        {wishlist.map((items)=>(
          <Card items ={items}/>
        ))}
      </div></>}
    </div>
  )
}


