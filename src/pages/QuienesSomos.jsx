// src/pages/QuienesSomos.jsx
import { Link } from "react-router-dom";

export default function QuienesSomos() {
  return (
    <section className="container">
      {/* Encabezado */}
      <header className="mb-5 text-center">
        <h1 className="section-title-mdq">Quiénes somos</h1>
        <p className="lead text-muted mb-0">
          Abogados especializados en derecho a la salud y en la protección de los derechos
          de las personas con discapacidad en Mar del Plata.
        </p>
      </header>

      <div className="row g-4">
        {/* Columna principal */}
        <div className="col-lg-8">
          <article className="card-mdq">
            <div className="card-mdq__body">
              <p>
                Contamos con <strong>25 años de trayectoria</strong> que avalan nuestro profesionalismo y dedicación.
                Actuamos cuando se vulneran derechos de salud para asegurar coberturas de tratamientos, medicación,
                internaciones y prestaciones vinculadas a la discapacidad.
              </p>
              <p>
                <em>Conocemos los criterios de los tribunales y el proceso del amparo</em>, lo que nos permite
                diseñar estrategias ajustadas a cada caso y obtener resultados en tiempo útil.
              </p>

              <h2 className="section-subtitle-mdq mt-3">Nuestro enfoque</h2>
              <ul className="mb-0">
                <li>Asesoramiento claro, práctico y orientado a resultados.</li>
                <li>Estrategias según documentación y contexto de cada afiliado.</li>
                <li>Amplia experiencia en amparos de salud y medidas cautelares.</li>
              </ul>
            </div>
          </article>
        </div>

        {/* Lateral */}
        <aside className="col-lg-4">
          <div className="card-mdq h-100">
            <div className="card-mdq__body">
              <h3 className="card-mdq__title">Por qué elegirnos</h3>
              <ul className="mb-3">
                <li>Especialistas en derecho a la salud.</li>
                <li>25 años de experiencia.</li>
                <li>Enfoque local en Mar del Plata.</li>
              </ul>

              <div className="d-flex gap-2">
                <Link to="/servicios" className="btn-mdq btn-mdq--soft btn-mdq--sm">Ver servicios</Link>
                <Link to="/contacto" className="btn-mdq btn-mdq--primary btn-mdq--sm">Contacto</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Callout final */}
      <div className="callout-mdq mt-5 text-center">
        <div className="callout-mdq__inner">
          <p className="fs-5 mb-3">¿Necesitás ayuda con una cobertura o un tratamiento?</p>
          <Link to="/como-actuar" className="btn-mdq btn-mdq--primary btn-mdq--lg">
            Ver cómo actuar
          </Link>
        </div>
      </div>
    </section>
  );
}
