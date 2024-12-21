import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Reserve from './Reserve';
import NewLogin from './NewLogin';
import Root from './Root';
import Days from './Days';
import Number from './Number';
import Confirm from './Confirm';
import End from './End';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/newlogin" element={<NewLogin />} />
        <Route path="/root" element={<Root />} />
        <Route path="/days" element={<Days />} />
        <Route path="/number" element={<Number />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
