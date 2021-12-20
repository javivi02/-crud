import React, {useState} from "react";
import Ventana from "./componentes/Ventana";
import {Button, Modal} from "react-bootstrap";

const App = () => {

    const carga = [
        {id: 1, Nombre: 'Javier', Apellidos: 'Garcia'},
        {id: 2, Nombre: 'Paula', Apellidos: 'Sainz'},
        {id: 3, Nombre: 'Daniela', Apellidos: 'Garcia'},
        {id: 4, Nombre: 'Eugenio', Apellidos: 'Garcia'},
        {id: 5, Nombre: 'Esther', Apellidos: 'Garcia'},
        {id: 6, Nombre: 'Antonio', Apellidos: 'Sainz'},
    ];

    // UseState

    const [datos, setDatos] = useState(carga);
    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [id, setId] = useState(0);

    // Funciones
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handledNuevo = (usuario) => {
        usuario.id = datos.length + 1;
        setDatos([...datos, usuario]);
    }

    const handledEditar = (item) => {
        handleShow();
        setNombre(item.Nombre);
        setApellidos(item.Apellidos);
        setId(item.id);
    }

    const handleUpdate = () => {
        setDatos(datos.map( item =>
            item.id === id ?
            { id: id, Nombre: nombre, Apellidos: apellidos } :
            item ));
        handleClose()
    }

    const handledEliminar = (id) => {
        setDatos(datos.filter( item => item.id !== id ));
    }

    return(

        <div className="container">
            <h1>Tabla de datos</h1>
            <Ventana handledNuevo={handledNuevo}/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {
                    datos.map(item =>
                        (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.Nombre}</td>
                            <td>{item.Apellidos}</td>
                            <td>
                                <button className="btn btn-sm btn-danger"
                                        onClick={ () => handledEliminar(item.id) }>
                                    Eliminar
                                </button>
                                <button className="btn btn-sm btn-success"
                                        onClick={ () => handledEditar(item) }>
                                    Editar
                                </button>
                            </td>
                        </tr>)
                    )
                }
                </tbody>
            </table>


            {/*Modal de edicion*/}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="mb-3">
                        <label className="form-label">ID</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="id"
                            readOnly
                            value={id}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellidos</label>
                        <input
                            type="text"
                            name="apellidos"
                            className="form-control"
                            placeholder="Apellidos"
                            onChange={(e) => setApellidos(e.target.value)}
                            value={apellidos}/>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default App;