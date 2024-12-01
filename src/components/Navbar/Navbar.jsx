import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../api/AuthContext";
import Avvvatars from 'avvvatars-react';
import "./Navbar.css";


const Navbar = () => {
  const { logout, login, isAuthenticated } = useAuth();

  

  const handleLogout = () => {
    logout();
  Navigate('/');
    // alert('Sesión cerrada');
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid nav">
        <Link className="navbar-brand img-nav" to="/">
          <img
            src="/img/logo_patin_carrera.png" // Ruta de la imagen del logo
            alt="Logo de la escuela"
            className="logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link" to="/titulos">
                Títulos
              </Link>
            </li>
            <li>
              <Link className="nav-link dropdown-item" to="/protegida">
                Alumnos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/historia">
                Historia
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>

          {!isAuthenticated ? (
            <>
              <Link className="nav-link" to="/login">
                Iniciar sesión
              </Link>
              <Link className="nav-link" to="/register">
                Registrarse
              </Link>
            </>
          ) : (

            <>
              <Link>
              <Avvvatars 
              value={login}/>
              </Link>

            <Link className="nav-link" onClick={handleLogout}>
              Cerrar sesión
            </Link>

                        </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
