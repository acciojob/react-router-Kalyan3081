
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
const App = () => {
  return (
 
        {/* Do not remove the main div */}
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>

  )
}

export default App
