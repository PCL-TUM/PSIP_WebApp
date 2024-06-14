// import { useState } from 'react'
import react from "react";
import './App.css'

// import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Sidebar from "./components/Sidebar";
import Dashboard from './components/Dashboard'
import Datatable from './components/Datatable'
import MeangeDepartment from './components/MeangeDepartment';
import MeangePersonnel from './components/MeangePersonnel';
import MeangeUserSystem from './components/MeangeUserSystem';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="flex bg-base-200">
          <Sidebar />
          <div className="h-screen flex-1 overflow-y-scroll">
              <Routes>
                <Route path="/" element={<Dashboard />} />    
                <Route path="/datatable" element={<Datatable />} />  
                <Route path="/meangeDepartment" element={<MeangeDepartment />} />
                <Route path="/meangePersonnel" element={<MeangePersonnel />} />  
                <Route path="/meangeUserSystem" element={<MeangeUserSystem />} />  
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
