import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AlumnoList from "./components/Alumnos/AlumnosList";
import Navbar from "./components/Navbar/Navbar";
import AlumnoDetail from "./components/Alumnos/AlumnoDetail";
import Home from "./components/Home/Home";
import Alumnos from "./components/Alumnos/AlumnosList";
import Titulos from "./components/Títulos/Titulos";
import Historia from "./components/Historia/Historia";
import Contacto from "./components/Contacto/Contacto";
import Register from "./components/api/Register";
import { AuthProvider } from "./components/api/AuthContext";
import Login from "./components/api/Login";
import ProtectedRouter from "./components/api/ProtectedRouter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<ProtectedRouter isAuthenticated={true} />}>
                <Route path="/protegida" element={<Alumnos />} />
                <Route path="/" element={<AlumnoList />} />
                <Route path="/alumno/:id" element={<AlumnoDetail />} />
                <Route path="/titulos" element={<Titulos />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/contacto" element={<Contacto />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
