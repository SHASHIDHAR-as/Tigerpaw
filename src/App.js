import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Sidebar/>
        <AppRoutes /> 
      </BrowserRouter>
  );
}

export default App;
