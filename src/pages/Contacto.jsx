// src/pages/Contacto.jsx
import { useState } from "react";
import opcionesReclamo from "../content/opcionesReclamo";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    reclamo: "",
    mensaje: "",
    website: "" // honeypot (debe quedar vacío)
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Ingresá tu nombre y apellido.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Ingresá un email válido.";
    if (!form.telefono.trim()) e.telefono = "Ingresá un teléfono de contacto.";
    if (!form.reclamo) e.reclamo = "Seleccioná un tema.";
    if (!form.mensaje.trim()) e.mensaje = "Contanos brevemente tu caso.";
    if (form.website) e.global = "Error de validación."; // honeypot (spam)
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const labelDe = (value) => {
    const found = opcionesReclamo.find((o) => o.value === value);
    return found ? found.label : "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Construye un mailto (sin backend)
    const destinatario = "info@discapacidadmdq.com.ar"; // <-- reemplazar si cambia
    const asunto = encodeURIComponent(`Consulta — ${labelDe(form.reclamo)} — ${form.nombre}`);
    const cuerpo = encodeURIComponent(
      [
        `Nombre y Apellido: ${form.nombre}`,
        `Email: ${form.email}`,
        `Teléfono: ${form.telefono}`,
        `Tema: ${labelDe(form.reclamo)}`,
        "",
        "Mensaje:",
        form.mensaje
      ].join("\n")
    );

    window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
  };

  return (
    <section className="container">
      {/* Encabezado unificado */}
      <header className="mb-5 text-center">
        <h1 className="section-title-mdq">Tu caso</h1>
        <p className="lead text-muted">Completá el formulario y nos pondremos en contacto.</p>
      </header>

      {/* Card unificada */}
      <article className="card-mdq">
        <div className="card-mdq__body">
          {/* honeypot (oculto para humanos) */}
          <div style={{ position: "absolute", left: "-10000px" }} aria-hidden="true">
            <label htmlFor="website">No completar este campo</label>
            <input id="website" name="website" value={form.website} onChange={onChange} />
          </div>

          <form noValidate onSubmit={onSubmit}>
            <div className="row g-3">
              {/* Nombre */}
              <div className="col-12 col-md-6">
                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                  value={form.nombre}
                  onChange={onChange}
                  aria-describedby={errors.nombre ? "err-nombre" : undefined}
                />
                {errors.nombre && <div id="err-nombre" className="invalid-feedback">{errors.nombre}</div>}
              </div>

              {/* Email */}
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={form.email}
                  onChange={onChange}
                  aria-describedby={errors.email ? "err-email" : undefined}
                />
                {errors.email && <div id="err-email" className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* Teléfono */}
              <div className="col-12 col-md-6">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
                  value={form.telefono}
                  onChange={onChange}
                  aria-describedby={errors.telefono ? "err-telefono" : undefined}
                  inputMode="tel"
                />
                {errors.telefono && <div id="err-telefono" className="invalid-feedback">{errors.telefono}</div>}
              </div>

              {/* Dropdown */}
              <div className="col-12 col-md-6">
                <label htmlFor="reclamo" className="form-label">Seleccione el objeto a reclamar</label>
                <select
                  id="reclamo"
                  name="reclamo"
                  className={`form-select ${errors.reclamo ? "is-invalid" : ""}`}
                  value={form.reclamo}
                  onChange={onChange}
                  aria-describedby={errors.reclamo ? "err-reclamo" : undefined}
                >
                  {opcionesReclamo.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.reclamo && <div id="err-reclamo" className="invalid-feedback">{errors.reclamo}</div>}
              </div>

              {/* Mensaje */}
              <div className="col-12">
                <label htmlFor="mensaje" className="form-label">Relate brevemente su caso</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
                  value={form.mensaje}
                  onChange={onChange}
                  aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
                />
                {errors.mensaje && <div id="err-mensaje" className="invalid-feedback">{errors.mensaje}</div>}
              </div>
            </div>

            {/* Botón */}
            <div className="mt-4">
              <button type="submit" className="btn-mdq btn-mdq--primary btn-mdq--lg">Enviar</button>
              {errors.global && <div className="text-danger mt-3">{errors.global}</div>}
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
