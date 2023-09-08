import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList.tsx';
import GeometryCalculator from './components/GeometryCalculator.tsx';
import LibraryApp from './components/LibraryApp.tsx';
import PetSimulation from './components/PetSimulation.tsx';
import GestorDeContactos from './components/GestorDeContactos.tsx';

const App: React.FC = () => {
  const [componenteActual, setComponenteActual] = useState<string | null>(null);

  const mostrarComponente = (componente: string) => {
    setComponenteActual(componente);
  };

  return (
    <div>
      <h1>Aplicación Principal</h1>
      <div>
        <button onClick={() => mostrarComponente('tareas')}>Lista de Tareas</button>
        <button onClick={() => mostrarComponente('geometria')}>Calculadora de Geometría</button>
        <button onClick={() => mostrarComponente('biblioteca')}>Biblioteca Virtual</button>
        <button onClick={() => mostrarComponente('mascotas')}>Simulación de Mascotas</button>
        <button onClick={() => mostrarComponente('contactos')}>Gestor de Contactos</button>
      </div>

      {componenteActual === 'tareas' && <TaskList />}
      {componenteActual === 'geometria' && <GeometryCalculator />}
      {componenteActual === 'biblioteca' && <LibraryApp />}
      {componenteActual === 'mascotas' && <PetSimulation />}
      {componenteActual === 'contactos' && <GestorDeContactos />}
    </div>
  );
};

export default App;