import React from "react";
import ContactCard from "../components/ContactCard.jsx";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../context/ContactContext.jsx";

export const Home = () => {

  	const { contacts, deleteContact } = useContacts();
	const navigate = useNavigate();

	return (
		<div className="container">
			<h1>Lista de Contactos</h1>
			<div className="add-contact">
				<button onClick={() => navigate("/add")} >
                ➕ Agregar contacto
            	</button>
			</div>

			{contacts.length === 0 ? (
				<p>No se encontraron contactos</p>
			) : (
				contacts.map((contact) => (
					<ContactCard key={contact.id} contact={contact} />
				))
			)}
		</div>
	);
};

export default Home;