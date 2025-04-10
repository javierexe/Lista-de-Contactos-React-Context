import { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();

export const useContacts = () => useContext(ContactContext);

const API_URL = "https://playground.4geeks.com/contact";
const AGENDA_SLUG = "javierexe";

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        try {
            const res = await fetch(`${API_URL}/agendas/${AGENDA_SLUG}/contacts`);
            const data = await res.json();
            console.log("🚀 Respuesta de la API:", data);
            if (Array.isArray(data.contacts)) {
                setContacts(data.contacts);
            } else {
                console.error("Respuesta inesperada:", data);
                setContacts([]); // fallback
            }
        } catch (error) {
            console.error("Error fetching contacts", error);
            setContacts([]);
        }
    };

    const addContact = async (contact) => {
        try {
            const res = await fetch(`${API_URL}/agendas/${AGENDA_SLUG}/contacts`, { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...contact, agenda_slug: AGENDA_SLUG })
            });
            if (res.ok) getContacts();
            } catch (error) {
            console.error("Error adding contact", error);
        }
    };

    const deleteContact = async (id) => {
        try {
            const res = await fetch(`${API_URL}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
                method: "DELETE"
            });
            if (res.ok) getContacts();
            console.log("Contacto eliminado y lista actualizada");
        } catch (error) {
            console.error("Error deleting contact", error);
        }
    };

    const updateContact = async (id, updatedData) => {
        try {
            const res = await fetch(`${API_URL}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...updatedData, agenda_slug: AGENDA_SLUG })
            });
            if (res.ok) getContacts();
        } catch (error) {
            console.error("Error updating contact", error);
        }
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <ContactContext.Provider value={{ contacts, addContact, deleteContact, updateContact }}>
            {children}
        </ContactContext.Provider>
    );
};
