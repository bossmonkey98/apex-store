import React from 'react'
import './ProductListing.css'

function ProductListing() {
  return (
    <div>
      <div className="home-page-content">
        <div className="filters">
            <p><strong>Filter</strong><a className="clear" href="#">Clear</a></p>
            <strong>Price</strong>
            <div className="slide">
                <div className="prices">
                    <span style={{textalign:"left;"}}>50</span>
                    <span style={{textalign:"center;"}}>150</span>
                    <span style={{textalign:"end;"}}>1000</span>
                </div>
                <ul><input type="range" className="slider-ip"/></ul>
            </div>
            <strong>Category</strong>
            <div className="categories">
                <ul><input className="check-box" type="radio"/><span>Apparel</span></ul>
                <ul><input className="check-box" type="radio"/><span>Collectibles</span></ul>
                <ul><input className="check-box" type="radio"/><span>Accessories</span></ul>
            </div>
            <strong>Rating</strong>
            <div className="ratings">
                <ul><input className="check-box" type="radio"/><span>4 Stars and above</span></ul>
                <ul><input className="check-box" type="radio"/><span>3 Stars and above</span></ul>
                <ul><input className="check-box" type="radio"/><span>2 Stars and above</span></ul>
                <ul><input className="check-box" type="radio"/><span>1 Stars and above</span></ul>
            </div>
            <strong>Sort by</strong>
            <div className="sort">
                <ul><input className="check-box" name="sorting" type="radio"/><span>Price- Low to High</span></ul>
                <ul><input className="check-box" name="sorting" type="radio"/><span>Price- High to Low</span></ul> 
            </div>
        </div>
        <div className="product-list">
            <div className="vertical-card">
                {/* <img className="vertical-card-img" src="../../assets/images/bundle1.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Black Heart Caustic
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/bun.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Dread Captain Bloodhound
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/bundle5.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    HypeBeast Wattson
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/bundle3.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Air Orchid Valkyrie
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/prdouct1.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Octane Beanie [Pre-Order]
                    <p>$99.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/mad-maggie.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Mad-Maggie Jacket [Pre-Order]
                    <p>$199.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/socks.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Ash Socks [Pre-Order]
                    <p>$19.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/wind-breaker.webp" alt=""> */}
                <div className="vertical-card-content">
                    Wraith Wind Breaker Jacket [Pre-Order]
                    <p>$149.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/melee.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Void Walker Kunai [Pre-Order]
                    <p>$299.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/product-2.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Aniversary Sqad Tee [Pre-Order]
                    <p>$25.99</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/bottle.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Apex Logo Bottle [Pre-Order]
                    <p>$25.99</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/towel.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Nessie Towel [Pre-Order]
                    <p>$99.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/joggers.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Cotton Joggers [Pre-Order]
                    <p>$199.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/hat.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Apex Logo Hat[Pre-Order]
                    <p>$19.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/pin.webp" alt=""> */}
                <div className="vertical-card-content">
                    Apex Logo Pin [Pre-Order]
                    <p>$149.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/oversized.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Over Sized T-shirt [Pre-Order]
                    <p>$299.5</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src="../../assets/images/mousepad.webp" alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Aniversary Sqad Mouse Pad [Pre-Order]
                    <p>$25.99</p>
                </div>
            </div>
            <div className="vertical-card">
                {/* {/* <img className="vertical-card-img" src alt=""> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                    Crop Top [Pre-Order]
                    <p>$25.99</p>
                </div>
            </div>
          </div>
        </div>
    </div> 
  )
}

export default ProductListing