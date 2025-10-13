// src/pages/ComoActuar.jsx
import { Link } from "react-router-dom";

export default function ComoActuar() {
  return (
    <section className="container">
      {/* ENCABEZADO */}
      <header className="mb-5 text-center">
        <h1 className="section-title-mdq">Cómo actuar</h1>
        <p className="lead text-muted">
          Pasos para reclamar ante una negativa o silencio de la obra social y cómo funciona
          el recurso de amparo en salud.
        </p>
      </header>

      {/* PASOS */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <article className="card-mdq h-100">
            <div className="card-mdq__body">
              <h2 className="card-mdq__title">1. Entrevista inicial</h2>
              <p className="card-mdq__text">
                Brindamos asesoramiento jurídico y práctico según tu caso,
                explicando cómo reclamar formalmente ante la obra social
                y qué documentación es necesaria.
              </p>
            </div>
          </article>
        </div>

        <div className="col-md-4">
          <article className="card-mdq h-100">
            <div className="card-mdq__body">
              <h2 className="card-mdq__title">2. Vía administrativa</h2>
              <p className="card-mdq__text">
                Se presenta el reclamo formal. Si hay negativa o arbitrariedad, 
                se habilita la instancia judicial para exigir el cumplimiento de tus derechos.
              </p>
            </div>
          </article>
        </div>

        <div className="col-md-4">
          <article className="card-mdq h-100">
            <div className="card-mdq__body">
              <h2 className="card-mdq__title">3. Acción de amparo</h2>
              <p className="card-mdq__text">
                Se interpone el amparo para tutelar tu derecho a la salud y, en casos urgentes, 
                se solicita una medida cautelar con resolución rápida.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* RECURSO DE AMPARO */}
      <article className="reveal mb-5">
        <h2 className="section-subtitle-mdq">¿Qué es el recurso de amparo en salud?</h2>
        <p>
          El recurso de amparo se utiliza cuando se afecta o niega el ejercicio de un derecho, 
          por ejemplo la cobertura de un tratamiento, medicación, internación o traslado. 
          Es una vía judicial rápida y efectiva: ante urgencia puede dictarse una medida cautelar 
          en pocas horas; luego el proceso continúa hasta la resolución definitiva.
        </p>
        <p className="mb-0">
          Los plazos varían según el caso y el expediente. Si hay apelaciones, 
          interviene el tribunal de alzada.
        </p>
      </article>

      {/* BLOQUE FINAL */}
      <section className="callout-mdq reveal text-center" role="complementary">
        <div className="callout-mdq__inner">
          <p className="fs-5 mb-3">
            ¿Creés que tu obra social o prepaga vulnera tu derecho a la salud?
          </p>
          <Link to="/contacto" className="btn-mdq btn-mdq--primary btn-mdq--lg">
            Quiero consultar mi caso
          </Link>
        </div>
      </section>
    </section>
  );
}
