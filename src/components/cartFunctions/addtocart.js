import axios from 'axios'

export const addCart = async(product,user)=>{
    try{
        const {data} = await axios.post("./api/user/cart",
        {product},
        {headers: {authorization:user.tokenVal}},
        )
            return data
        }
        catch(error){
            console.error("Oops caught cart error:",error)
        }
}