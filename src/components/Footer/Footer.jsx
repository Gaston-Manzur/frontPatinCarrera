import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div>
  
      <div className="row navbar-dark bg-dark footer">
        <div className="col col-footer">
          <h3>Patin Carrera</h3>
          <p>
           "La escuela municipal de <span>Patin Carrera General Rodriguez</span> ofrece una altenativa deportiva de forma gratuita y para todas las edades. Desde hace poco mas de 3 años, nos encontramos en constante crecimiento y contamos con varios titulos en este corto tiempo."</p>
        </div>

        <div className="col col-footer">
          <h3>Categorias</h3>
          <ul className='lineas-comunicacion'>
            <li className='col-footer'><Link className="dropdown-item " to="./protegida">Escuela</Link></li>
            <li className='col-footer'><Link className="dropdown-item" to="./protegida">Transicion</Link></li>
            <li className='col-footer'><Link className="dropdown-item" to="./protegida">Federados</Link></li>
            <li className='col-footer'><Link className="dropdown-item" to="./protegida">Libres</Link></li>
          </ul>
        </div>
        <div className="col col-footer">
          <h3>Redes sociales</h3>
          
          <ul className='lineas-comunicacion'>
            <li className='col-footer'><Link className="dropdown-item dropdown-item-img" to="https://es-la.facebook.com"><img src='./img/facebook.png' alt=""/>Facebook</Link></li>
            <li className='col-footer'><Link className="dropdown-item dropdown-item-img" to="https://www.instagram.com/"><img src='./img/instagram.png' alt="" />Instagram</Link></li>
            <li className='col-footer'><Link className="dropdown-item dropdown-item-img" to="https://web.telegram.org/"><img src='./img/telegrama.png' alt="" />Telegram</Link></li>
            <li className='col-footer'><Link className="dropdown-item dropdown-item-img" to="https://x.com/X"><img src='./img/gorjeo.png' alt="" />X</Link></li>
            
          </ul>
          </div>


        <div className="col col-footer">
          <h3>Lineas de comunicacion</h3>
          <ul className='lineas-comunicacion'>
            <li className='col-footer'><Link className="dropdown-item dropdown-item-img" to="./contacto"><img src='./img/casa.png' alt=""/>Alguana calle de Gral. Rodriguez Bs. As. Argentina</Link></li>
            <li className='col-footer'><Link className="dropdown-item dropdown-item-img" to="./contacto"><img src='./img/sobre-de-carta.png' alt="" />GRpatinCarrera@gmail.com</Link></li>
            <li className='col-footer'><Link className="dropdown-item dropdown-item-img" to="./contacto"><img src='./img/telefono.png' alt="" />+54 9 11234-5678</Link></li>
            <li className='col-footer'><Link className="dropdown-item dropdown-item-img" to="./contacto"><img src='./img/fax.png' alt="" />+54 9 11234-5678</Link></li>
            
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer;