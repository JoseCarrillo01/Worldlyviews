import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Gallery from './pexels';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useRef } from "react";
import Inicio from './pages/inicio';


function App() {

  return (
    <div className="App">
    
       <div className="app">
       <Inicio />
      <Gallery />
    </div>

























    </div>




  );
}

export default App;
