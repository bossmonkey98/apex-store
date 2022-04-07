import axios from "axios";

export const removeCartItems = async (id,user) =>{
   console.log(id,user)
    try{
        const {data} =await axios.delete(`/api/cart/${id}`, 
        {headers:{
            authorization:user.tokenVal
            }
        }
        )
        return data
    }
    catch(error){
        console.error("Oops caught cart error!!",error);
    }
}