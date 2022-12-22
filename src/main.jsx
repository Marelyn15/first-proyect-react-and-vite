import React from "react";
import ReactDOM from "react-dom/client";
//style
import "simpledotcss/simple.min.css";
import "./styles/cards.css";
//Routes
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
//boton - todas las rutas
import { Layout } from "./components/layout";
//Icons
import { MdOutlineCancel } from "react-icons/md";

//Pages
import App from "./pages/Home";
import Post from "./pages/posts/Post";
import { DetallesPosts } from "./pages/posts/DetallesPosts";
import AddUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser"
import User from "./pages/users/User";
import { DetallesUsuarios } from "./pages/users/DetallesUsuarios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    /**Aplicando boton retroceso para todas las rutas */
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/posts",
        element: <Post />,
      },
      {
        path: "posts/:id",
        element: <DetallesPosts />,
      },
      {
        path: "/posts/:id/users/:id",
        element: <DetallesUsuarios />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "users/:id",
        element: <DetallesUsuarios />,
      },
      {
        path: "users/:id/posts/:id",
        element: <DetallesPosts />,
      },
      {
        path: "/users/AddPerson",
        element: <AddUser />,
      },
      {
        path: "/users/:id/EditUser",
        element: <EditUser />,
      },
    ],
  },
  {
    /**Si no estan las direcciones entonces */
  },
  {
    path: "*",
    element: (
      <>
        <span style={{ fontSize: "50px", textAlign: "center" }}>
          {" "}
          <MdOutlineCancel />
          Route not found
        </span>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
