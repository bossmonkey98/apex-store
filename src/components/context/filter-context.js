import { createContext,useContext,useReducer } from "react";
import FilterReducer from '../filter'

const FilterContext = createContext()

const useFilter = () => useContext(FilterContext)

const FilterProvider=({children})=>{
    const [state, dispatch] = useReducer(FilterReducer,{
        sortBy:'',
        showAccessories:false,
        showCollectibles:false,
        showApparel:false,
        rating:NaN,
    });

    return(
        <FilterContext.Provider value={{state ,dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export {useFilter , FilterProvider}
