import React from 'react'

const ListaTareas = ({listaTareas, handleRemove}) => {

  return (
    <ul>
        {listaTareas.map((task, index) => (
            <div key={index} >
                <input type="checkbox" />
                <li>{task}</li>
                <button onClick={() => handleRemove(index)}>Borrar Tarea</button>
            </div>
        ))}
        
    </ul>
  )
}

export default ListaTareas