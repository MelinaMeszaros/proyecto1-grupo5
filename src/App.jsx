
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntegrantesVista from './Vistas/IntegrantesVista';
import ToDoList from './Vistas/ToDoList';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={< IntegrantesVista />} />
          <Route path='/proyecto' element={< ToDoList />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
};

export default App
