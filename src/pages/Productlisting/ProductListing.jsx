import './ProductListing.css'
import { useEffect, useState } from 'react'
import { useProducts } from '../../context/product-context'
import { useFilter } from '../../context/filter-context'
import { filtereddata } from '../../reducer/filter'
import { Card } from '../../components/Card/Card'
import { Filter } from '../../components/Filter'
import { Fab } from '@material-ui/core'
import { FilterList } from '@material-ui/icons'
import { Pagination } from '../../components/Pagination'

function ProductListing() {
    const { ProductData, fetchProductdata } = useProducts()
    useEffect(() => {
        fetchProductdata()
    }, [])
    const { state, dispatch } = useFilter()
    const [bool, setBool] = useState(false)
    var products = filtereddata(ProductData, state)
    const [itemsPerPage] = useState(12)
    const [currPage, setCurrPage] = useState(1)

    //get current items

    const indexOfLastItem = currPage * itemsPerPage
    const indexofFirstItem = indexOfLastItem - itemsPerPage
    if (products) {
        var currItems = products.slice(indexofFirstItem, indexOfLastItem)
    }
    //Change page
    const paginate = pageNo => setCurrPage(pageNo)

    return (
        <div className="home-page-content">

            {bool && <Filter state={state} dispatch={dispatch} />}
            <div>
                <div className="product-list">
                    {!products ? <p>loading</p> : <>
                        {currItems.map((items) => (
                            <Card key={items.id} items={items} />
                        ))}</>}
                </div>
                {products &&
                    <div className='paginate'>
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            totalitems={products.length}
                            paginate={paginate}
                        />
                    </div>
                }
            </div>
            <Fab className='FAB' size='small' onClick={() => setBool(!bool)}>
                <FilterList fontSize='small' />
            </Fab>
        </div>
    )
}

export default ProductListing