import './ProductListing.css'
import {useEffect} from 'react'
import { useProducts } from '../../components/context/product-context'
import { Star } from '@material-ui/icons'
import {useFilter} from '../../components/context/filter-context'
import { filtereddata } from '../../components/filter'

function ProductListing() {
    const {ProductData, fetchProductdata} =useProducts()
    useEffect(()=>fetchProductdata(),[])
    const {state ,dispatch} =useFilter()
    const {sortBy,showAccessories,showApparel,showCollectibles,rating} = {...state}
    const prod = ProductData
    var products = filtereddata(prod,state)
    console.log(state)
    console.log(products)
    return (
    <div>
      <div className="home-page-content">
            <div className="filters">
                <p><strong>Filter</strong><a className="clear" onClick={()=>dispatch({type:'clear'})}>Clear</a></p>
                <strong>Category</strong>
                <div className="categories">
                    <ul><input className="check-box" onChange={()=>dispatch({type:'Accessories'})} checked={showAccessories} type="checkbox"/><span>Accessories</span></ul>
                    <ul><input className="check-box" onChange={()=>dispatch({type:'Apparel'})} checked={showApparel} type="checkbox"/><span>Apparel</span></ul>
                    <ul><input className="check-box" onChange={()=>dispatch({type:'Collectibles'})} checked={showCollectibles} type="checkbox"/><span>Collectibles</span></ul>
                </div>
                <strong>Rating</strong>
                <div className="ratings">
                    <ul><input className="check-box" onChange={()=>dispatch({type:'rating',payload:4})} checked={rating && rating === 4} type="checkbox"/><span>4 Stars and above</span></ul>
                    <ul><input className="check-box" onChange={()=>dispatch({type:'rating',payload:3})} checked={rating && rating === 3} type="checkbox"/><span>3 Stars and above</span></ul>
                    <ul><input className="check-box" onChange={()=>dispatch({type:'rating',payload:2})} checked={rating && rating === 2} type="checkbox"/><span>2 Stars and above</span></ul>
                    <ul><input className="check-box" onChange={()=>dispatch({type:'rating',payload:1})} checked={rating && rating === 1} type="checkbox"/><span>1 Stars and above</span></ul>
                </div>
                <strong>Sort by</strong>
                <div className="sort">
                    <ul><input className="check-box" name="sorting" type="radio" onChange={()=>dispatch({type:'sort',payload:"Price_Low_To_High"})} checked={sortBy && sortBy === "Price_Low_To_High"} /><span>Price- Low to High</span></ul>
                    <ul><input className="check-box" name="sorting" type="radio" onChange={()=>dispatch({type:'sort',payload:"Price_High_To_Low"})} checked={sortBy && sortBy === "Price_High_To_Low"}/><span>Price- High to Low</span></ul> 
                </div>
            </div>
                <div className="product-list">
                {!products?<p key={0}>loading</p>:<>
                    {products.map((items)=>(
                    <div key={items.id} className="vertical-card">
                        <img className="vertical-card-img" src={items.img} alt=""/>
                        <span className="card-badge">New</span>
                        <div className="vertical-card-content">
                            <h3>{items.title}</h3>
                            <p>Price: ${items.price}</p>
                            <p className='rating'>Rating: {items.rating}{<Star id='star'/>}</p>
                        </div>
                    </div>))}</>}
                </div>
        </div>
    </div> 
  )
}

export default ProductListing