import './App.css';
import Main from './pages/main.js';
import Login from './pages/login.js';
import Home from './pages/home.js';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import {
  BrowserRouter , Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />}/>
          
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
