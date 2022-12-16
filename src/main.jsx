import React from 'react'
import ReactDOM from 'react-dom/client'
import "simpledotcss/simple.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//Pages
import App from './pages/App';
import Detalles from './pages/Detalles';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Detalles />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);
