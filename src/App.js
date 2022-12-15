import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/about';


function App() {
  
  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  
    </div>
  )
}

export default App;
