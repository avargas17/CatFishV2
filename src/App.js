import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loginsignup from './imports/loginsignup';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Learnmore from './components/Learnmore';
import Explore from './components/Explore'
import Opening from './components/Opening';

function App() {
  return (
    <Router>
      <Navbar/>
     <Routes>
        <Route path='/' exact element ={<Homepage/>}/>
      </Routes>
      </Router>
  );
}
export default App;
