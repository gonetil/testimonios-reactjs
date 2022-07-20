import React from 'react';
import '../css/Testimonio.css';

export function Testimonio(props){
  const baseAlt = 'Fotografía de ';
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require(`../imagenes/${props.persona.nombre.toLowerCase()}.jpg`)} 
        alt={baseAlt + props.persona.nombre}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.persona.nombre.toUpperCase()} de <strong>{props.persona.pais}</strong></p>
        <p className='cargo-tetimonio'>{props.persona.cargo} en {props.persona.empresa}</p>
        <p className='texto-testimonio'>"{props.persona.texto}"</p>
      </div>
    </div>
  );
}