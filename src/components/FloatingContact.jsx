// src/components/FloatingContact.jsx
import { useLocation } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

export default function FloatingContact() {
  const { pathname } = useLocation();
  if (pathname === "/contacto") return null;

  const phone = "5492234421528";
  const msg = encodeURIComponent("Hola, quisiera hacer una consulta sobre mis derechos de salud.");
  const href = `https://wa.me/${phone}?text=${msg}`;

  return (
    <a
      className="floating-contact"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactanos por WhatsApp"
    >
      <span className="pill">Contactanos</span>
      <span className="bubble" aria-hidden="true">
        <BsWhatsapp size={22} />
      </span>
    </a>
  );
}
