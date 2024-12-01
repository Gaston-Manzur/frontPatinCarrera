import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Novedades = () => {
  const [novedades, setNovedades] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [multimedia, setMultimedia] = useState(null);

  useEffect(() => {
    const fetchNovedades = async () => {
      const response = await axios.get('/api/novedades');
      setNovedades(response.data);
    };
    fetchNovedades();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('contenido', contenido);
    if (multimedia) formData.append('multimedia', multimedia);

    await axios.post('/api/novedades', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    setTitulo('');
    setContenido('');
    setMultimedia(null);
    const response = await axios.get('/api/novedades');
    setNovedades(response.data);
  };

  return (

    
    <div className="container">
      <h1>Novedades</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <textarea
            className="form-control"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Multimedia (opcional)</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setMultimedia(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Publicar
        </button>
      </form>
      <hr />
      <div className="row">
        {novedades.map((novedad) => (
          <div key={novedad._id} className="col-md-4 mb-3">
            <div className="card">
              {novedad.multimedia && (
                <img
                  src={novedad.multimedia}
                  alt={novedad.titulo}
                  className="card-img-top"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{novedad.titulo}</h5>
                <p className="card-text">{novedad.contenido}</p>
                <small className="text-muted">
                  Publicado el {new Date(novedad.fecha).toLocaleDateString()}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novedades;
