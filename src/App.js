import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './component/Home';
import About from './component/about';
import Sidebar from './component/Sidebar';


function App() {
  
  return (
    <div className="flex">
      <Sidebar/>
    <BrowserRouter>
      <Routes>
          <Route path="/detect" element={<Home />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App;
