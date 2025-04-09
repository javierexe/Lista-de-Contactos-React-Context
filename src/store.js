export const initialStore=()=>{
  return{
    contacts: [
      {
        id: 1,
        full_name: "Juan Perez",
        email: "juanperez@gmail.com",
        phone: "555-1234",
        address: "123 Main St, Ciudad de Mexico", 
      },
      {
        id: 2,
        full_name: "Maria Garcia",
        email: "mariagarcia@gmail.com",
        phone: "555-5678",
        address: "456 Elm St, Monterrey",
      }
    ]
  };
};

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'ADD_CONTACT':
      return {
        ...store,
        contacts: [...store.contacts, action.payload]
      };

    case 'DELETE_CONTACT':
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload)
      };

    case 'UPDATE_CONTACT':
      return {
        ...store,
        contacts: store.contacts.map(contact => 
          contact.id === action.payload.id ? action.payload : contact
        )
      };

    default:
      throw Error(`Acción desconocida: ${action.type}`);


  }
}

