// src/routes.jsx (extracto)
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import Servicios from "./pages/Servicios.jsx";
import ComoActuar from "./pages/ComoActuar.jsx";
import Contacto from "./pages/Contacto.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/quienes-somos", element: <QuienesSomos /> }, // ← AQUI
      { path: "/servicios", element: <Servicios /> },
      { path: "/como-actuar", element: <ComoActuar /> },
      { path: "/contacto", element: <Contacto /> },
    ],
  },
]);
