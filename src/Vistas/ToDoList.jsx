import React, { useState } from 'react'
import ListaTareas from '../Componentes/ListaTareas';

const ToDoList = () => {

  const [tarea, setTarea] = useState('')
  const [listaTareas, setListaTareas] = useState([]);

  const manejarCambio = e => {
    setTarea(e.target.value) 
  };

  const manejarEnvio = e => { 
    e.preventDefault();
    setListaTareas([...listaTareas, tarea]); 
    setTarea('');
  }; 

  const handleRemove = (task) => {
    setListaTareas(listaTareas.filter((tarea) => listaTareas.indexOf(tarea) !== task));
  };

console.log(listaTareas);


  return (
    <section>
      <h1>ToDoList</h1>
      <div>
        <form onSubmit={manejarEnvio}>
          <input 
            type="text" 
            name='todoList'
            placeholder='Ingrese Tarea' 
            value={tarea}
            onChange={manejarCambio}/>
          <button type='submit' >Agregar Tarea</button>  
        </form>
        <ListaTareas listaTareas={listaTareas} handleRemove={handleRemove}/>
      </div>
    </section>
  )
}

export default ToDoList