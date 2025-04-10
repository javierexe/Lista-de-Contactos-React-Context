import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContacts } from "../context/ContactContext.jsx"

const EditContact = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const { contacts, updateContact } = useContacts();

    const [contact, setContact] = useState(null);

    useEffect(() => {
        const exist = contacts.find((contact) => contact.id === parseInt(id));
        if (exist)
            setContact(exist);
    }, [id, contacts]);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateContact(id, contact);
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
                    <input name="name" value={contact.name} onChange={handleChange} required />
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