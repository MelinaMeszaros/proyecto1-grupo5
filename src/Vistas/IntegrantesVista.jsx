import {React, useState} from 'react';
import json from '../assets/grupos.json';
import Card from '../Componentes/Card';
import { useNavigate} from 'react-router-dom';

function filtrarGrupos() {
  const grupos = json;
  return grupos.find((grupo) => grupo.id === "G5-MHGFR");
}

function IntegrantesVista() {
  const grupos = filtrarGrupos();
  const navigate= useNavigate();

  const handleClick = () => { 
    navigate('/proyecto');
  } 
    
  return (
    <div>
      <Card infoGrupo = {grupos} />
      <button onClick={handleClick}>Proyecto ToDoList</button>
    </div>
  )
}

export default IntegrantesVista