import React from "react";
import ReactDOM from "react-dom/client";
//style
import "simpledotcss/simple.min.css";
import "./styles/cards.css";
//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import App from "./pages/App";
import Detalles from "./pages/Detalles";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Detalles />} />
        <Route path="/:id/EditUser" element={<EditUser />} />
        <Route path="/AddPerson" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
