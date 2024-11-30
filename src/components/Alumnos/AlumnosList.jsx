import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AlumnoForm from './AlumnoForm';
import './Alumnos.css'



const AlumnoList = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = () => {
    axios
      .get('http://localhost:5000/api/alumnos')
      .then((response) => setAlumnos(response.data))
      .catch((error) => console.error(error));
  };

  const handleAlumnoAdded = (newAlumno) => {
    setAlumnos([...alumnos, newAlumno]);
  };

  return (
    <div>
       <h1>Crear nuevo alumno</h1>
      <AlumnoForm onAlumnoAdded={handleAlumnoAdded} />
      <h1 className='titulo'>Lista de Alumnos</h1>
      <ul>
      <div className='container-cards'>
  {alumnos.map((alumno) => (
   
    <li className='item-card' key={alumno._id}>
       <div className="card">
      { <img src={`http://localhost:5000/uploads/${alumno.foto}`} alt={`${alumno.nombre} ${alumno.apellido}`} className="card-img"  />}
     <div className="card-body">
      <h5 className="card-title">{alumno.nombre} {alumno.apellido}</h5> 
      <p className="card-text">Categoria: {alumno.categoriaEdad}</p>
      <Link to={`/alumno/${alumno._id}`} className="btn btn-primary">Ver Detalles</Link>
      </div>
      </div>
    </li>
    
  ))}
  </div>
</ul>

    </div>
  );
};

export default AlumnoList;


