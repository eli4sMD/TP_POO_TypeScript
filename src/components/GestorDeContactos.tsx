import React, { Component } from 'react';

class Contact {
  constructor(public nombre: string, public correo: string, public telefono: string) {}
}

class GestorDeContactos extends Component {
  state = {
    contacts: [] as Contact[],
    nombre: '',
    correo: '',
    telefono: '',
    filtroNombre: '',
  };

  agregarContacto = () => {
    const { nombre, correo, telefono, contacts } = this.state;

    if (nombre.trim() === '' || correo.trim() === '' || telefono.trim() === '') {
      return;
    }

    const nuevoContacto = new Contact(nombre, correo, telefono);
    this.setState({
      contacts: [...contacts, nuevoContacto],
      nombre: '',
      correo: '',
      telefono: '',
    });
  };

  eliminarContacto = (index: number) => {
    const { contacts } = this.state;
    const contactosActualizados = [...contacts];
    contactosActualizados.splice(index, 1);
    this.setState({ contacts: contactosActualizados });
  };

  // Método para actualizar el filtro por nombre
  actualizarFiltroNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtroNombre: e.target.value });
  };

  render() {
    const { nombre, correo, telefono, contacts, filtroNombre } = this.state;

    // Filtrar los contactos por nombre
    const contactosFiltrados = contacts.filter((contact) =>
      contact.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    );

    return (
      <div>
        <h1>Gestor de Contactos</h1>
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => this.setState({ nombre: e.target.value })}
          />
          <input
            type="text"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => this.setState({ correo: e.target.value })}
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => this.setState({ telefono: e.target.value })}
          />
          <button onClick={this.agregarContacto}>Agregar Contacto</button>
        </div>
        {/* Agregar campo de búsqueda */}
        <div>
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={filtroNombre}
            onChange={this.actualizarFiltroNombre}
          />
        </div>
        {contactosFiltrados.length > 0 && (
          <ul>
            {contactosFiltrados.map((contact, index) => (
              <li key={index}>
                <h2>Contacto: {contact.nombre}</h2>
                <p>Correo: {contact.correo}</p>
                <p>Teléfono: {contact.telefono}</p>
                <button onClick={() => this.eliminarContacto(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default GestorDeContactos;