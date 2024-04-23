import React from 'react'
import ReactDOM from 'react-dom/client'
import Asteroide from './Asteroide.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuSuperior from "./MenuSuperior.jsx"
import SobreMim from "./SobreMim.jsx"
import PaginaPrincipal from './PaginaPrincipal.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuSuperior />
      <Routes>
        <Route path='/' element={<PaginaPrincipal/>} />
        <Route path='/asteroide' >
          <Route path=':id' element={<Asteroide />} />
        </Route>
        <Route path='/sobre-mim' element={<SobreMim />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
