import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";


const Ventana = ({ handledNuevo }) => {

    const [show, setShow] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        handledNuevo({ id: null, Nombre: nombre, Apellidos: apellidos });
        setNombre('');
        setApellidos('');
        handleClose();

    }

    return(

        <>
            <Button variant="primary" size="sm" onClick={handleShow}>
                Agregar Usuario
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellidos</label>
                        <input
                            type="text"
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
                    <Button variant="primary" onClick={handleSave}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default Ventana;