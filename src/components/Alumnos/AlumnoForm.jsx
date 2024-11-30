import React, { useState } from 'react';
import axios from 'axios';

const AlumnoForm = ({ onAlumnoAdded }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    categoria: '',
    categoriaEdad: '',
  });
  const [foto, setFoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (foto) data.append('foto', foto);

    try {
      const response = await axios.post('http://localhost:5000/api/alumnos', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onAlumnoAdded(response.data);
      setFormData({ nombre: '', apellido: '', edad: '', categoria: '', categoriaEdad: '' });
      setFoto(null);
    } catch (error) {
      console.error('Error al agregar el alumno:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3 needs-validation form-media">
      <div className="col-md-4 col-fom">
        <label className="form-control form-control-mod">Nombre</label>
        <input className="form-control" type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>
      <div className="col-md-4 col-fom">
        <label className="form-control form-control-mod">Apellido</label>
        <input className="form-control" type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
      </div>
      <div className="col-md-4 col-fom">
        <label className="form-control form-control-mod">Edad</label>
        <input className="form-control" type="number" name="edad" value={formData.edad} onChange={handleChange} required />
      </div>
      <div className="col-md-4 col-fom">
        <label className="form-control form-control-mod">Categoría</label>
        <input className="form-control" type="text" name="categoria" value={formData.categoria} onChange={handleChange} required />
      </div>
      <div className="col-md-4 col-fom">
        <label className="form-control form-control-mod ">Categoría por Edad</label>
        <input className="form-control" type="text" name="categoriaEdad" value={formData.categoriaEdad} onChange={handleChange} required />
      </div>
      <div className="col-md-4 col-fom">
        <label className="form-control form-control-mod">Foto</label>
        <input className="form-control"  type="file" onChange={handleFileChange} />
      </div>
      
      <button type="submit" className='btn btn-primary form-control-mod boton3'>Agregar Alumno</button>
    </form>
  );  
};


export default AlumnoForm;

