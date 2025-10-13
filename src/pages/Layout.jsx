// src/layout/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import FloatingContact from "../components/FloatingContact";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();

  // Marca que hay JS para activar el modo animado en CSS
  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  // Observer global para .reveal en cada ruta
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <>
      <a className="visually-hidden-focusable" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" className="container py-4">
        <ScrollToTop />
        <Outlet />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}
