// src/layout/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import FloatingContact from "../components/FloatingContact";

export default function Layout() {
  const location = useLocation();

  // Marca que hay JS para activar animaciones reveal
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  // Activa animaciones .reveal en cada cambio de ruta
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      {/* Enlace accesible para saltar directamente al contenido */}
      <a className="visually-hidden-focusable" href="#contenido">
        Saltar al contenido
      </a>

      {/* Navbar principal */}
      <Navbar />

      {/* Contenido principal */}
      <main id="contenido">
        <ScrollToTop />
        <Outlet />
      </main>

      {/* Botón flotante y pie */}
      <FloatingContact />
      <Footer />
    </>
  );
}
