import React, { Component } from 'react';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blank from './pages/Blank';
import Dashboard from './pages/Dashboard';
import MainLayout from './Layout/MainLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='customers' element={<Blank/>}/>
            <Route path='games' element={<Blank/>}/>
            <Route path='winners' element={<Blank/>}/>
            <Route path='settings' element={<Blank/>}/>
            <Route path='stats' element={<Blank/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
