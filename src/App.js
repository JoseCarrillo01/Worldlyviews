import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useRef } from "react";
import Inicio from './pages/inicio';
import explorar from './pages/explorar';
import Navbar from './pages/nav';


function App() {

  return (
    <div className="app">
      <Navbar />

    </div>

  );
}

export default App;
