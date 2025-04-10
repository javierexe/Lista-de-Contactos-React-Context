import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { useState } from 'react';
import { useContacts } from '../context/ContactContext';

const ContactCard = ({ contact }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const { deleteContact } = useContacts();


    const handleDelete = (id) => {
            deleteContact(id);
            setShowModal(false);
            
        };
    
    return (
        <>
            <div className="contact-card">
                <img
                    src={`https://ui-avatars.com/api/?name=${contact.name}&background=random&rounded=true`}
                    alt={contact.name}
                    className="avatar"
                />
                <div className="contact-info">
                    <h3>{contact.name}</h3>
                    <p><MdEmail /> {contact.email}</p>
                    <p><MdLocalPhone /> {contact.phone}</p>
                    <p><MdLocationPin /> {contact.address}</p>
                </div>
                <div className="contact-actions">
                    <button className='edit-button' onClick={() => navigate(`/edit/${contact.id}`)}><FiEdit /></button>
                    <button className='delete-button' onClick={() => setShowModal(true)}><FaTrashAlt /></button>
                </div>
            </div>

            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Eliminar contacto</h5>
                        <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                        <p>¿Estás seguro de que deseas eliminar a <strong>{contact.name}</strong>?</p>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(contact.id)}>Eliminar</button>
                        </div>
                    </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default ContactCard;