import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-context";
import { getWishlist } from "../WishlistFunctions/getWishlist";
import { AddtoWishlist } from "../WishlistFunctions/Addtowishlist";
import { RemoveFromWishlist } from "../WishlistFunctions/RemoveWishlist";

const WishlistContext = createContext()

const useWishlist = () =>useContext(WishlistContext)

const WishlistProvider = ({children}) =>{
    const [wishlist,setWishlist] = useState([]);
    const {user} =useAuth();

    //to get the wishlist user data
    useEffect(()=>{
        if(user.isUserLoggedIn){
            (async () =>{
                const data =await getWishlist(user)
                if(data)
                    setWishlist(data.wishlist);
            }
            )()}
        else
            setWishlist([])
        },[user])
    
        //to add item to wishlist
        const AddItemToWishlist = async (prod)=>{
            const newItem = await AddtoWishlist(prod,user);
            if(newItem)
                setWishlist(newItem.wishlist)
        }
    
        // remove item from wishlist
        const RemoveItemFromWishlist = async (id)=>{
            const RemoveItem = await RemoveFromWishlist(id,user);
            if(RemoveItem)
                setWishlist(RemoveItem.wishlist)
        }
    

    return(
        <WishlistContext.Provider  value={{wishlist,setWishlist,AddItemToWishlist,RemoveItemFromWishlist}}>
        {children}
        </WishlistContext.Provider>

    )}

export {useWishlist,WishlistProvider}

