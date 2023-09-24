import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './Routes';

function App() {
  return (
 
    <div className="mainframe">
    <Navbar/>
    <Sidebar/>
    <div className="App">
      <AppRoutes />
    </div>
    </div>
   
  );
}

export default App;
