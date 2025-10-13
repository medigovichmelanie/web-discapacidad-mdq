// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 992) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }) => `nav-mdq__link ${isActive ? "active" : ""}`;

  return (
    <header className="nav-mdq" role="banner">
      <div className="container nav-mdq__wrap">
        <Link
          to="/"
          className="nav-mdq__brand"
          aria-label="Inicio – Discapacidad MDQ"
          onClick={() => setOpen(false)}
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
          onClick={() => setOpen(!open)}
        >
          <span className="nav-mdq__bar" />
          <span className="nav-mdq__bar" />
          <span className="nav-mdq__bar" />
        </button>

        <nav
          id="menu-principal"
          className={`nav-mdq__menu ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <NavLink to="/servicios" className={linkClass} onClick={() => setOpen(false)}>
            Servicios
          </NavLink>

          {/* NUEVO: Quiénes somos */}
          <NavLink to="/quienes-somos" className={linkClass} onClick={() => setOpen(false)}>
            Quiénes somos
          </NavLink>

          <NavLink to="/como-actuar" className={linkClass} onClick={() => setOpen(false)}>
            Cómo actuar
          </NavLink>

          <NavLink to="/contacto" className={linkClass} onClick={() => setOpen(false)}>
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
