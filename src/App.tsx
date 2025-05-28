import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    
  )
}

export default App;
