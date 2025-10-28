// src/components/Footer.jsx
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const year = new Date().getFullYear();

  // Datos de contacto (1 sola fuente de verdad)
  const EMAIL = "drgianuzzi@gmail.com";
  const PHONE_E164 = "+5492234421528";
  const PHONE_HUMAN = "+54 9 223 442-1528";
  const WHATS_E164 = "5492234421528";

  return (
    <footer className="footer-mdq" role="contentinfo">
      <div className="container footer-mdq__grid">
        {/* Columna marca / contacto */}
        <section className="footer-mdq__brand" aria-labelledby="ft-brand">
          <h2 id="ft-brand" className="footer-mdq__title">Discapacidad MDQ</h2>
          <p className="footer-mdq__desc">
            Abogados especialistas en derecho a la salud en Mar del Plata.
          </p>
          <ul className="footer-mdq__list">
            <li>
              <span className="footer-mdq__label">Email:</span>{" "}
              <a href={`mailto:${EMAIL}`} className="footer-mdq__link">
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="footer-mdq__label">Teléfono:</span>{" "}
              <a href={`tel:${PHONE_E164}`} className="footer-mdq__link">
                {PHONE_HUMAN}
              </a>
            </li>
            <li>
              <span className="footer-mdq__label">WhatsApp:</span>{" "}
              <a
                href={`https://wa.me/${WHATS_E164}`}
                target="_blank"
                rel="noreferrer"
                className="footer-mdq__link"
                aria-label="Escribir por WhatsApp"
              >
                Escribir por WhatsApp
              </a>
            </li>
            <li>
              <span className="footer-mdq__label">Dirección:</span>{" "}
              <span>Mar del Plata</span>
            </li>
            <li className="footer-mdq__hint">
              Horarios de atención: Lun–Vie 9 a 14 h
            </li>
          </ul>
        </section>

        {/* Columna secciones */}
        <nav className="footer-mdq__nav" aria-labelledby="ft-sec">
          <h2 id="ft-sec" className="footer-mdq__subtitle">Secciones</h2>
          <ul className="footer-mdq__links">
            <li><Link className="footer-mdq__link" to="/">Inicio</Link></li>
            <li><Link className="footer-mdq__link" to="/servicios">Servicios</Link></li>
            <li><Link className="footer-mdq__link" to="/quienes-somos">Quiénes somos</Link></li>
            <li><Link className="footer-mdq__link" to="/como-actuar">Cómo actuar</Link></li>
            <li><Link className="footer-mdq__link" to="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        {/* Columna atajos */}
        <nav className="footer-mdq__nav" aria-labelledby="ft-atajos">
          <h2 id="ft-atajos" className="footer-mdq__subtitle">Atajos útiles</h2>
          <ul className="footer-mdq__links">
            <li><a className="footer-mdq__link" href="/servicios#geriatrica">Residencia geriátrica</a></li>
            <li><a className="footer-mdq__link" href="/servicios#obra-social-jubilacion">Obra social al jubilarte</a></li>
            <li><a className="footer-mdq__link" href="/servicios#protesis-ortesis">Prótesis y órtesis</a></li>
            <li><a className="footer-mdq__link" href="/servicios#tratamiento-negado">Tratamiento/medicación negada</a></li>
          </ul>
        </nav>
      </div>

      {/* Línea inferior */}
      <div className="container footer-mdq__bottom">
        <p className="footer-mdq__copy">© {year} Discapacidad MDQ. Todos los derechos reservados.</p>

        {/* Selector de tema (versión compacta) */}
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <ThemeToggle compact />
          <a
            href="#contenido"
            className="footer-mdq__up"
            aria-label="Volver al contenido principal"
          >
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
