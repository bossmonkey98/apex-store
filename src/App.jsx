import './App.css';
import {Footer} from './components/Footer/Footer'
import {Navbar} from './components/Navbar/Navbar'
import Signup from './pages/auth/Signup';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import {Cart} from './pages/Cart/Cart'
import {Wishlist} from './pages/Wishlist/Wishlist'
import Login from './pages/auth/Login'
import ProductListing from './pages/Productlisting/ProductListing'
import {PrivateRoute} from './components/PrivateRoutes'
import Error404 from './pages/Error404/Error404';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductListing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path ='/cart' element={<PrivateRoute PrivateItem={<Cart/>}/>}/>
        <Route path='/wishlist' element={<PrivateRoute PrivateItem={<Wishlist />} />} />
        <Route path='*' element={<Error404/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
