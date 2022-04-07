import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom';
import {ProductProvider} from './components/context/product-context'
import { FilterProvider } from "./components/context/filter-context";
import {WishlistProvider} from "./components/context/wishlist-context"
import { AuthProvider } from "./components/context/auth-context";
import {CartProvider} from "./components/context/cart-context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <AuthProvider>
          <CartProvider>
          <WishlistProvider>
              <FilterProvider>
                <App />
              </FilterProvider>
          </WishlistProvider>
          </CartProvider>
        </AuthProvider>  
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
