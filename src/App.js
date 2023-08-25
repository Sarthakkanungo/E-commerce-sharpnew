import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './Home';
import Store from './components/Store';



function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Store" element={<Store />} />
      </Routes>   
      <Footer />
    </div>
  );
}

export default App;
