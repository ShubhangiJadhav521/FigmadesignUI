import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Plan from './component/Plan';
import Review from './component/Review';
import Joinpage from './component/Joinpage';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Plan/>
      <Review/>
      <Joinpage/>
    </div>
  );
}

export default App;
