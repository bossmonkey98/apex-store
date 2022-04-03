
export default function FilterReducer(state ,action){
    switch(action.type){
        case ('sort'):
            return{...state,sortBy:action.payload}

        case ('Accessories'):
            return{...state,showAccessories:!state.showAccessories}
        
        case ('Apparel'):
            return{...state,showApparel:!state.showApparel}

        case ('Collectibles'):
            return{...state,showCollectibles:!state.showCollectibles}

        case ('rating'):
            return {...state,rating:action.payload}
        case ('clear'):
            return {
                sortBy:'',
                showAccessories:false,
                showCollectibles:false,
                showApparel:false,
                rating:NaN,
            }    
        default:
            return state
    }
}

function getSortedData(product, sortBy) {
    if (sortBy && sortBy === "Price_High_To_Low") {
    return product.sort((a, b) => b.price - a.price);
}

    else if (sortBy && sortBy === "Price_Low_To_High") {
    return product.sort((a, b) => a.price - b.price);
}
    else return product;
}

function getratingdata (product,rating){
    return product.filter((items)=>items.rating>=rating)
}

export function filtereddata(productList,{sortBy,showAccessories,showApparel,showCollectibles,rating}){
    let filterprod =[]
    let arr =[]
    var bool =false
        if(showAccessories){
            arr = productList.filter((items)=>items.category==='Accessories')
            filterprod.push(...arr)
            bool=true
        }

        if(showCollectibles){
                arr =productList.filter((items)=>items.category==='Collectibles')
                filterprod.push(...arr)
                bool=true
        }

        if(showApparel){              
                arr =productList.filter((items)=>items.category==='Apparel')
                filterprod.push(...arr)
                bool=true
        }

        if(bool){
            filterprod = getSortedData(filterprod,sortBy)
                if(rating){
                    return getratingdata(filterprod,rating)
                }
                else
                    return filterprod
            }
        else{
            productList =getSortedData(productList,sortBy)
                if(rating){
                    return getratingdata(productList,rating)}
                else
                    return productList
        }
}