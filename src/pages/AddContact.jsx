import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactContext";



const AddContact = () => {
    const { addContact } = useContacts();
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };


const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(contact);
    navigate("/");
};

return (
    <>
    <div className="form-container">
        <h2>Agregar Contacto</h2>
        <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Nombre" onChange={handleChange} required />
                <input name="email" placeholder="Email" onChange={handleChange} required />
                <input name="phone" placeholder="Teléfono" onChange={handleChange} required />
                <input name="address" placeholder="Dirección" onChange={handleChange} required />
                <button type="submit">Guardar</button>
        </form>
    </div>
    <div className="form-footer">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>Volver a Contactos</button>
    </div>
    </>

    
);

};

export default AddContact;


