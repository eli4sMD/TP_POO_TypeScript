import { Component, useState } from 'react';

interface Mascota {
  nombre: string;
  especie: string;
  nivelFelicidad: number;
}

class PetSimulation extends Component {
  render() {
    return (
      <div>
        <h1>Simulación de Mascotas Virtuales</h1>
        <PetSimulationContent />
      </div>
    );
  }
}

function PetSimulationContent() {
  const [mascotas, setMascotas] = useState<Mascota[]>([]);
  const [nombreNuevaMascota, setNombreNuevaMascota] = useState<string>('');
  const [especieNuevaMascota, setEspecieNuevaMascota] = useState<string>('');

  const agregarMascota = () => {
    if (nombreNuevaMascota.trim() === '') {
      return;
    }

    const nuevaMascota: Mascota = {
      nombre: nombreNuevaMascota,
      especie: especieNuevaMascota,
      nivelFelicidad: 50,
    };

    setMascotas([...mascotas, nuevaMascota]);
    setNombreNuevaMascota('');
    setEspecieNuevaMascota(''); 
  };

  const eliminarMascota = (index: number) => {
    const mascotasActualizadas = [...mascotas];
    mascotasActualizadas.splice(index, 1);
    setMascotas(mascotasActualizadas);
  };

  const alimentarMascota = (index: number) => {
    const mascotasActualizadas = [...mascotas];
    mascotasActualizadas[index].nivelFelicidad += 10;
    
    setMascotas(mascotasActualizadas);
  };

  const jugarConMascota = (index: number) => {
    const mascotasActualizadas = [...mascotas];
    mascotasActualizadas[index].nivelFelicidad += 20;
    setMascotas(mascotasActualizadas);
  };

  const cuidarMascota = (index: number) => {
    const mascotasActualizadas = [...mascotas];
    mascotasActualizadas[index].nivelFelicidad += 5;
    setMascotas(mascotasActualizadas);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Nombre de la nueva mascota"
          value={nombreNuevaMascota}
          onChange={(e) => setNombreNuevaMascota(e.target.value)}
        />
        <input
          type="text"
          placeholder="Especie de la nueva mascota"
          value={especieNuevaMascota}
          onChange={(e) => setEspecieNuevaMascota(e.target.value)}
        />
        <button onClick={agregarMascota}>Agregar Mascota</button>
      </div>
      {mascotas.length > 0 && (
        <ul>
          {mascotas.map((mascota, index) => (
            <li key={index}>
              <h2>Mascota: {mascota.nombre}</h2>
              <p>Especie: {mascota.especie}</p>
              <p>Nivel de Felicidad: {mascota.nivelFelicidad}</p>
              <button onClick={() => alimentarMascota(index)}>Alimentar</button>
              <button onClick={() => jugarConMascota(index)}>Jugar</button>
              <button onClick={() => cuidarMascota(index)}>Cuidar</button>
              <button onClick={() => eliminarMascota(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PetSimulation;
