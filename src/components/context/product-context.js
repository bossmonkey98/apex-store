import { createContext, useContext } from "react";
import axios from 'axios';
import { useState } from "react";

const ProductContext = createContext()

function ProductProvider({children}){
    const [ProductData, setProductData] =useState();
    const url ="/api/products"
        const fetchProductdata = async() =>{
            const response = await axios.get(url)
            const arr = response.data.products
            setProductData(arr)
        }
    return(
    <ProductContext.Provider value={{ProductData,setProductData,fetchProductdata}}>
        {children}
    </ProductContext.Provider>
    )}

const useProducts=() => useContext(ProductContext)

export {ProductProvider,useProducts}