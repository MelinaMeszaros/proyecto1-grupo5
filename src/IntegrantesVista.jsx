import {React, useState} from 'react';
import json from './assets/grupos.json';
import Card from './Card';

function filtrarGrupos() {
  const grupos = json;
  return grupos.find((grupo) => grupo.id === "G5-MHGFR");
}

function IntegrantesVista() {
  const [grupos, setGrupos] = useState(filtrarGrupos);
 
  return (
    <div>
      <Card infoGrupo = {grupos} />
    </div>
  )
}

export default IntegrantesVista