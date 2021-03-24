import React from 'react';
import {HashRouter, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';
import Footer from './components/footer/footer';
import './App.css';

function App() {

  return (
    <div className='app'>
    <HashRouter>
      <Navbar />
      <Route exact path='/' component={Index} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
    </HashRouter>
    <Footer />
    </div>
  );
}

export default App;
