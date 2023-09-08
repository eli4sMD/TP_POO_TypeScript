import { Component } from 'react';

class Libro {
  constructor(public titulo: string, public autor: string, public prestado: boolean = false) {}
}

class LibraryApp extends Component {
  state = {
    libros: [] as Libro[],
    nuevoLibro: {
      titulo: '',
      autor: '',
    },
  };

  agregarLibro = () => {
    const { nuevoLibro, libros } = this.state;
    if (nuevoLibro.titulo.trim() === '' || nuevoLibro.autor.trim() === '') {
      return;
    }

    const libroNuevo = new Libro(nuevoLibro.titulo, nuevoLibro.autor);
    this.setState({
      libros: [...libros, libroNuevo],
      nuevoLibro: {
        titulo: '',
        autor: '',
      },
    });
  };

  prestarLibro = (index: number) => {
    const { libros } = this.state;
    const librosActualizados = [...libros];
    librosActualizados[index].prestado = true;
    this.setState({ libros: librosActualizados });
  };

  devolverLibro = (index: number) => {
    const { libros } = this.state;
    const librosActualizados = [...libros];
    librosActualizados[index].prestado = false;
    this.setState({ libros: librosActualizados });
  };

  eliminarLibro = (index: number) => {
    const { libros } = this.state;
    const librosFiltrados = libros.filter((_, i) => i !== index);
    this.setState({ libros: librosFiltrados });
  };

  render() {
    const { libros, nuevoLibro } = this.state;

    return (
      <div>
        <h1>Biblioteca Virtual</h1>
        <div>
          <input
            type="text"
            placeholder="Título del libro"
            value={nuevoLibro.titulo}
            onChange={(e) => this.setState({ nuevoLibro: { ...nuevoLibro, titulo: e.target.value } })}
          />
          <input
            type="text"
            placeholder="Autor del libro"
            value={nuevoLibro.autor}
            onChange={(e) => this.setState({ nuevoLibro: { ...nuevoLibro, autor: e.target.value } })}
          />
          <button onClick={this.agregarLibro}>Agregar Libro</button>
        </div>
        <ul>
          {libros.map((libro, index) => (
            <li key={index}>
              <strong>{libro.titulo}</strong> - Autor: {libro.autor}
              {libro.prestado ? (
                <span> - Prestado <button onClick={() => this.devolverLibro(index)}>Devolver</button></span>
              ) : (
                <span>
                  {' '}
                  - Disponible{' '}
                  <button onClick={() => this.prestarLibro(index)}>Prestar</button>
                </span>
              )}
              <button onClick={() => this.eliminarLibro(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LibraryApp;