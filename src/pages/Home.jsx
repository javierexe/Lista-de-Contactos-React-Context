import React from "react";
import ContactCard from "../components/ContactCard.jsx";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  	const {store, dispatch} = useGlobalReducer();
	const navigate = useNavigate();

	return (
		<div className="container">
			<h1>Lista de Contactos</h1>
			<div className="add-contact">
				<button onClick={() => navigate("/add")} >
                ➕ Agregar contacto
            	</button>
			</div>
			{store.contacts.lehgth === 0 ? (
				<p>No se encontraron contactos</p>
			) : (
				store.contacts.map((contact, index) => (
					<ContactCard key={index} contact={contact} />
				))
			)}
		</div>
	);
};

export default Home;