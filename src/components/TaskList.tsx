import { Component } from 'react';

class Task {
  constructor(public nombre: string, public fechaPublicacion: string, public completada: boolean) {}
}

class TaskList extends Component {
  state = {
    tasks: [] as Task[],
    nombre: '',
  };

  agregarTarea = () => {
    const { nombre, tasks } = this.state;

    if (nombre.trim() === '') {
      return;
    }

    const fechaActual = new Date();
    const fechaFormateada = `${fechaActual.getDate()}/${
      fechaActual.getMonth() + 1
    }/${fechaActual.getFullYear()}`;

    const nuevaTarea = new Task(nombre, fechaFormateada, false);
    this.setState({
      tasks: [...tasks, nuevaTarea],
      nombre: '',
    });
  };

  completarTarea = (index: number) => {
    const { tasks } = this.state;
    const tareasActualizadas = [...tasks];
    tareasActualizadas[index].completada = true;
    this.setState({ tasks: tareasActualizadas });
  };

  eliminarTarea = (index: number) => {
    const { tasks } = this.state;
    const tareasActualizadas = [...tasks];
    tareasActualizadas.splice(index, 1);
    this.setState({ tasks: tareasActualizadas });
  };

  render() {
    const { nombre, tasks } = this.state;

    return (
      <div>
        <h1>Lista de Tareas</h1>
        <div>
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={nombre}
            onChange={(e) => this.setState({ nombre: e.target.value })}
          />
          <button onClick={this.agregarTarea}>Agregar Tarea</button>
        </div>
        {tasks.length > 0 && (
          <ul>
            {tasks.map((tarea, index) => (
              <li key={index}>
                <h2>Tarea: {tarea.nombre}</h2>
                <p>Fecha de Publicación: {tarea.fechaPublicacion.slice(0, 10)}</p>
                {tarea.completada ? (
                  <p>Estado: Completada</p>
                ) : (
                  <button onClick={() => this.completarTarea(index)}>Completar</button>
                )}
                <button onClick={() => this.eliminarTarea(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TaskList;