import './App.css';
import Slider from './components/Slider';
import Newsletter from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Slider/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
