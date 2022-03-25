import './App.css';
import {Footer} from './components/Footer/Footer'
import {Navbar} from './components/Navbar/Navbar'
import Home from './pages/home/Home';
import ProductListing from './pages/Productlisting/ProductListing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
