import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const EditContact = () => {
    const {id} = useParams();
    const {store, dispatch} = useGlobalReducer();
    const navigate = useNavigate();

    const [contact, setContact] = useState(null);

    useEffect(() => {
        const exist = store.contacts.find((contact) => contact.id === parseInt(id));
        if (exist)
            setContact(exist);
    }, [id, store.contacts]);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "UPDATE_CONTACT",
            payload: contact,
        });
        navigate("/");
    };

    if (!contact) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <div className="form-container">
                <h2>Editar Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <input name="full_name" value={contact.full_name} onChange={handleChange} required />
                    <input name="email" value={contact.email} onChange={handleChange} required />
                    <input name="phone" value={contact.phone} onChange={handleChange} required />
                    <input name="address" value={contact.address} onChange={handleChange} required />
                    <button type="submit">Guardar</button>
                </form>
            </div>
            <div className="form-footer">
                <button className="btn btn-secondary" onClick={() => navigate("/")}>Volver a Contactos</button>
            </div>
        </>
    );
};

export default EditContact;