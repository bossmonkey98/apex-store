import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/product-context'
import { FilterProvider } from "./context/filter-context";
import { WishlistProvider } from "./context/wishlist-context"
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context"
import { ModalProvider } from "./context/modalContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
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
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
