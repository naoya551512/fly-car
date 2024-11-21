import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Reserve from './components/Reserve';
//import Root from './components/Root';
import Days from './components/Days';
import Comfirm from './components/Comfirm';
import End from './components/End';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserve" element={<Reserve />} />

        <Route path="/days" element={<Days />} />
        <Route path="/comfirm" element={<Comfirm />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
