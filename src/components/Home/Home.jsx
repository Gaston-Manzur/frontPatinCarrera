import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../api/AuthContext';
import Login from '../api/Login';
import { Link, Navigate } from 'react-router-dom';


const Home = () => {

  const { logout, login, isAuthenticated } = useAuth();

  return (
    <div>

{!isAuthenticated ? (
  <>
  
       <Login />
      <h5>Si aun no te has registrado hazlo aqui: </h5> <Link to={'/register'}><h5>Registro</h5></Link> 
     
  </>
) : (

  <h1>Novedades</h1>

)}

   
    </div>
  );
};

export default Home;