import React from 'react'
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App(){
  return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;

