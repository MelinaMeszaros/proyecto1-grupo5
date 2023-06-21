import React from 'react'

function Card({infoGrupo}) {
  const miembros = infoGrupo.members;
    
  return (
    <div>
      <h2>{infoGrupo.id}</h2> 
      <h2>Grupo 5</h2>
      <h3>Lider: </h3>
      <h3>{infoGrupo.leader}</h3>
      <h3>Desarrolladores: </h3>
      <ul>
        {miembros.map((miembro, index) => (
          <li key={index}>{miembro}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card