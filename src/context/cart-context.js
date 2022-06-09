import { createContext, useContext, useEffect, useState } from "react";
import { getCart } from "../services/cartFunctions/getcart";
import { addCart } from "../services/cartFunctions/addtocart";
import { removeCartItems } from "../services/cartFunctions/removeitem";
import { updateCart } from "../services/cartFunctions/updatecart";
import { useAuth } from "./auth-context";

const CartContext = createContext()

const useCart = () => useContext(CartContext)

const CartProvider = ({children})=>{
    const [cart,setCart] =useState([])
    const {user} =useAuth()
    
    useEffect(()=>{
        if(user.isUserLoggedIn){ 
        (async()=>{
        const data = await getCart(user)
            if(data){
            setCart(data.cart)
            }}
            )()}
            else{
                setCart([])
            }
        },[user])

        const addToCart = async (prod)=>{
            const newitem = await addCart(prod,user)
            if(newitem)
            setCart(newitem.cart)
        }

        const removeItemFromCart = async (id,user) =>{
            const removeItem = await removeCartItems(id,user)
            if(removeItem)
            setCart(removeItem.cart)
        }

        const updateCartValue = async (id ,Action) =>{
            const updateItem = await updateCart(id,user,Action)
            if(updateItem)
                setCart(updateItem.cart)
        }
    
    return (
        <CartContext.Provider value={{cart,setCart ,addToCart,removeItemFromCart,updateCartValue}}>
            {children}
        </CartContext.Provider>
    )
}

export {useCart ,CartProvider}