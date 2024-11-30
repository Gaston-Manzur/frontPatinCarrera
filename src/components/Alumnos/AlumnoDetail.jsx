import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Alumnos.css';

const AlumnoDetail = () => {
  const { id } = useParams(); // Obtener el ID del alumno desde la URL
  const navigate = useNavigate(); // Para redireccionar después de eliminar
  const [alumno, setAlumno] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar el modo de edición
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    categoria: '',
    categoriaEdad: '',
  });
  const [foto, setFoto] = useState(null); // Estado para la nueva foto

  useEffect(() => {
    // Obtener datos del alumno
    axios
      .get(`http://localhost:5000/api/alumnos/${id}`)
      .then((response) => {
        setAlumno(response.data);
        setFormData(response.data); // Prellenar el formulario
      })
      .catch((error) => console.error('Error al cargar el alumno:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (foto) data.append('foto', foto);

    axios
      .put(`http://localhost:5000/api/alumnos/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        alert('Alumno actualizado con éxito');
        setAlumno(response.data); // Actualizar los datos del alumno
        setIsEditing(false); // Salir del modo de edición
      })
      .catch((error) => {
        console.error('Error al actualizar el alumno:', error);
        alert('Error al actualizar el alumno');
      });
  };

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este alumno? Esta acción no se puede deshacer.')) {
      axios
        .delete(`http://localhost:5000/api/alumnos/${id}`)
        .then(() => {
          alert('Alumno eliminado con éxito');
          navigate('/protegida'); // Redirigir a la lista de alumnos después de eliminar
        })
        .catch((error) => {
          console.error('Error al eliminar el alumno:', error);
          alert('Error al eliminar el alumno');
        });
    }
  };

  if (!alumno) {
    return <p>Cargando datos del alumno...</p>;
  }

  return (
    <div>
      {!isEditing ? (
      <div className='detalleAlumnos'>
      
       
        <div className="card text-center info-alumno" >
            <h1 className="card-title"><strong>{alumno.nombre} {alumno.apellido}</strong></h1>
          <div className="card-header-mod">
          <p className="card-text"><strong>Edad:</strong> {alumno.edad}</p>
          <p className="card-text"><strong>Categoría:</strong> {alumno.categoria}</p>
          <p className="card-text"><strong>Categoría por Edad:</strong> {alumno.categoriaEdad}</p>
          </div>
          <div className="text-center tetx-center-buttons">
          <button onClick={() => setIsEditing(true)}  className="btn btn-primary form-control-mod">Editar</button>
          <button onClick={handleDelete}  className="btn btn-primary form-control-mod">Eliminar</button>
          <button onClick={() => navigate('/protegida')} className="btn btn-primary form-control-mod ">Volver</button>
          </div>
          </div>
        <div className='card-img-top'>
         {alumno.foto && <img src={`http://localhost:5000/uploads/${alumno.foto}`} alt="Foto del alumno" className='card-img-edit'/>}
        </div>
        
       
          </div>
          
      ) : (
        <form onSubmit={handleSubmit} className="row g-3 needs-validation form-edit">
          <h1>Editar Alumno</h1>
          <div className="col-md-4 col-fom">
            <label className="form-control form-control-mod">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="form-control"/>
          </div>
          <div className="col-md-4 col-fom">
            <label className="form-control form-control-mod">Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              className="form-control"/>
          </div>
          <div className="col-md-4 col-fom">
            <label className="form-control form-control-mod">Edad:</label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
              className="form-control"/>
          </div>
          <div className="col-md-4 col-fom">
            <label className="form-control form-control-mod">Categoría:</label>
            <input
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
              className="form-control"/>
          </div>
          <div className="col-md-4 col-fom">
            <label className="form-control form-control-mod">Categoría por Edad:</label>
            <input
              type="text"
              name="categoriaEdad"
              value={formData.categoriaEdad}
              onChange={handleChange}
              required
              className="form-control"/>
          </div>
          <div className="col-md-4 col-fom">
            <label className="form-control form-control-mod">Foto:</label>
            <input type="file" onChange={handleFileChange} className="form-control " />
          </div>
          <div className='button-edit'>
          <button type="submit" className='btn btn-primary form-control-mod boton'>Guardar Cambios</button>
          <button type="button" className='btn btn-primary form-control-mod boton2' onClick={() => setIsEditing(false)}>Cancelar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AlumnoDetail;

