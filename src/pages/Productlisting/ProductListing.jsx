import './ProductListing.css'
import { useEffect, useState } from 'react'
import { useProducts } from '../../context/product-context'
import { useFilter } from '../../context/filter-context'
import { filtereddata } from '../../reducer/filter'
import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter'
import { Fab } from '@material-ui/core'
import { FilterList} from '@material-ui/icons'

function ProductListing() {
    const { ProductData, fetchProductdata } = useProducts()
    useEffect(() => fetchProductdata(), [])
    const { state, dispatch } = useFilter()
    const [bool ,setBool] =useState(false)
    const prod = ProductData
    var products = filtereddata(prod, state)
    return (
        <div className="home-page-content">
            {bool && <Filter state={state} dispatch={dispatch} />}
            <div className="product-list">
                {!products ? <p>loading</p> : <>
                    {products.map((items) => (
                        <Card key={items.id} items={items} />
                    ))}</>}
            </div>
            <Fab className='FAB' size='small' onClick={()=>setBool(!bool)}>
                <FilterList fontSize='small'/>
            </Fab>
        </div>
    )
}

export default ProductListing