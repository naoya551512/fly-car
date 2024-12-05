import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Reserve from './Reserve';
import Root from './Root';
import Days from './Days';
import Comfirm from './Comfirm';
import End from './End';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/root" element={<Root />} />
        <Route path="/days" element={<Days />} />
        <Route path="/comfirm" element={<Comfirm />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
