import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './api';
import { useAuth } from './AuthContext'; 
import './api.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/login', { username, password });
      login(); // Llama a login después de un inicio de sesión exitoso
      navigate('/protegida'); // Redirige a la ruta protegida
      
    } catch (error) {
      alert('Error en el inicio de sesión: ' + error.response.data);
    }
  };

  return (
    <div className="continer-form">
    <form onSubmit={handleSubmit} className="row g-3 needs-validation form-media form-login-register">
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required 
        className="form-control form-control-log-reg"/>
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="form-control form-control-log-reg"/>
      <button type="submit" className='btn btn-primary form-control-mod boton'>Iniciar Sesión</button>
    </form>
    </div>
  );
};

export default Login;