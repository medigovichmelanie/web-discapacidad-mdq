// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Cierra el menú cuando cambia el viewport a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Cierra al cambiar de ruta (mejor UX en móvil)
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Cierra con Escape o click fuera
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClickOutside);
    };
  }, [open]);

  const linkClass = ({ isActive }) => `nav-mdq__link ${isActive ? "active" : ""}`;

  return (
    <header className="nav-mdq" role="banner">
      <div className="container nav-mdq__wrap">
        {/* Marca / Inicio */}
        <Link
          to="/"
          className="nav-mdq__brand"
          aria-label="Inicio – Discapacidad MDQ"
        >
          <div className="nav-mdq__logo">DM</div>
          <span>Discapacidad MDQ</span>
        </Link>

        {/* Botón hamburguesa */}
        <button
          type="button"
          className="nav-mdq__toggler"
          aria-expanded={open ? "true" : "false"}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-mdq__bar" />
          <span className="nav-mdq__bar" />
          <span className="nav-mdq__bar" />
        </button>

        {/* Menú principal */}
        <nav
          id="menu-principal"
          ref={menuRef}
          className={`nav-mdq__menu ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <NavLink to="/servicios" className={linkClass}>
            Servicios
          </NavLink>

          <NavLink to="/quienes-somos" className={linkClass}>
            Quiénes somos
          </NavLink>

          <NavLink to="/como-actuar" className={linkClass}>
            Cómo actuar
          </NavLink>

          <NavLink to="/contacto" className={linkClass}>
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
    
  );
}
