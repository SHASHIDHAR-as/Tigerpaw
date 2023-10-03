import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import './index.css'
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    {/* <Routes> */}
        {/* <Route path="/" element={<Layout/>}> */}
        {/* <Navbar/>
        <Sidebar/> */}
        <Layout/>
        <AppRoutes /> 
        {/* </Route> */}
        {/* </Routes> */}
      </BrowserRouter>
  );
}

export default App;
