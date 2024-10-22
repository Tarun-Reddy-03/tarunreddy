import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login'
import './App.css';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

      </Routes>
     
     </BrowserRouter>


     
    </div>
  )
}

export default App
