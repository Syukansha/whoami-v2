import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Detect from './component/Detect';
import About from './component/about';
import Home from './component/Home';
import Sidebar from './component/Sidebar';

import Map from "./component/Map";


function App() {
  
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/detect" element={<Detect />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
        
      </BrowserRouter>
      
   
    </div>
  )
}

export default App;
