import './App.css';
import {Footer} from './components/Footer/Footer'
import {Navbar} from './components/Navbar/Navbar'
import Signup from './pages/auth/Signup';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/Cart/Cart'
import {Wishlist} from './pages/Wishlist/Wishlist'
import Login from './pages/auth/Login'
import ProductListing from './pages/Productlisting/ProductListing'
import MockmanEs from 'mockman-js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<ProductListing/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path ='/mockmen' element={<MockmanEs/>}/>
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
