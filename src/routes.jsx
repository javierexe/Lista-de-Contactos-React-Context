// Import necessary components and functions from react-router-dom.
import React from "react";
import {
    createBrowserRouter }
  from "react-router-dom";
import { Home } from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";


export const router = createBrowserRouter([
  
  
    {
      path: "/",
      element:<Home />
    },
    {
      path:"/add",
      element:<AddContact />
    }, 
    {
      path:"/edit/:id",
      element:<EditContact />
    } 
  ]);