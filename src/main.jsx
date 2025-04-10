import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
import { ContactProvider } from './context/ContactContext.jsx';


const Main = () => {
    return (
        <React.StrictMode>  
            {/* Provide global state to all components */}
            <ContactProvider> 
                {/* Set up routing for the application */} 
                <RouterProvider router={router}>
                </RouterProvider>
            </ContactProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
