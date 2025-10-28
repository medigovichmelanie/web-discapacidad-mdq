// src/pages/Servicios.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import servicios from "../content/servicios";

export default function Servicios() {
  const { hash } = useLocation();
  const [abierto, setAbierto] = useState("");

  // Abrir panel según #hash o el primero
  useEffect(() => {
    const id = (hash || "").replace("#", "");
    if (id) {
      setAbierto(id);
      setTimeout(() => {
        const el = document.getElementById(`heading-${id}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      setAbierto(servicios[0]?.id || "");
    }
  }, [hash]);

  return (
    <section className="container">
      {/* Intro (vidrio) */}
      <header className="page-intro-mdq reveal" aria-labelledby="srv-title">
        <div>
          <p className="page-intro-mdq__eyebrow">Áreas frecuentes</p>
          <h1 id="srv-title" className="page-intro-mdq__title">
            Servicios
          </h1>
          <p className="page-intro-mdq__lead">
            Abrí cada tema para ver el detalle. También podés ir directo desde el inicio.
          </p>
        </div>
      </header>

      {/* Chips de acceso rápido */}
      <nav className="chips-mdq" aria-label="Accesos rápidos">
        {servicios.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="chip-mdq">
            {s.titulo}
          </a>
        ))}
      </nav>

      {/* Acordeón */}
      <div className="acc-mdq" id="accordionServicios">
        {servicios.map((s) => {
          const isOpen = abierto === s.id;
          return (
            <article
              className={`acc-mdq__item ${isOpen ? "is-open" : ""}`}
              key={s.id}
              id={`item-${s.id}`}
            >
              <h2
                className="acc-mdq__header"
                id={`heading-${s.id}`}
                style={{ scrollMarginTop: "76px" }} // compensa navbar sticky
              >
                <button
                  className="acc-mdq__trigger"
                  type="button"
                  aria-expanded={isOpen ? "true" : "false"}
                  aria-controls={`panel-${s.id}`}
                  onClick={() => setAbierto(isOpen ? "" : s.id)}
                >
                  <span className="acc-mdq__title">{s.titulo}</span>
                  <span className="acc-mdq__chev" aria-hidden="true" />
                </button>
              </h2>

              <section
                id={`panel-${s.id}`}
                className="acc-mdq__panel"
                role="region"
                aria-labelledby={`heading-${s.id}`}
              >
                <div className="acc-mdq__body">
                  {s.extracto && (
                    <p className="acc-mdq__excerpt">{s.extracto}</p>
                  )}

                  {Array.isArray(s.contenido) &&
                    s.contenido.map((p, i) => (
                      <p key={i} className="acc-mdq__p">
                        {p}
                      </p>
                    ))}

                  <div className="acc-mdq__actions">
                    <Link
                      to="/contacto"
                      className="btn-mdq btn-mdq--primary btn-mdq--sm"
                    >
                      Consultar este tema
                    </Link>
                    <a className="btn-mdq btn-mdq--soft btn-mdq--sm" href="#top">
                      Volver arriba
                    </a>
                  </div>
                </div>
              </section>
            </article>
          );
        })}
      </div>
    </section>
  );
}
