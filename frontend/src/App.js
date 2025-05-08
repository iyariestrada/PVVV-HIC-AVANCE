import React from "react";
//import "./App.css";
import VistaPrevia from "./VistaPrevia.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CompFormularioRegistro from "./FormularioRegistro.js";
import SeleccionarTerapeuta from "./SeleccionarPerapeuta.js";
import AgendarCita from "./AgendarCita.js";
import LoginView from "./Login/LoginView.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vista-previa" element={<VistaPrevia />} />

        <Route path="/login-sign-in-up" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
