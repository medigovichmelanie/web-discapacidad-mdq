// src/components/Hero.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero({ bgUrl, title, lead, ctas = [] }) {
  useEffect(() => {
    document.body.classList.add("has-hero");
    return () => document.body.classList.remove("has-hero");
  }, []);

  return (
    <section
      className="hero-mdq"
      style={{ backgroundImage: `url(${bgUrl})` }}
      aria-label="Sección principal de presentación"
    >
      <div className="container">
        <div className="hero-mdq__inner reveal">
          <h1 className="hero-mdq__title">{title}</h1>

          {lead && (
            <p className="hero-mdq__lead" role="doc-subtitle">
              {lead}
            </p>
          )}

          {ctas.length > 0 && (
            <div className="hero-mdq__cta">
              {ctas.map((c, i) => (
                <Link
                  key={i}
                  to={c.to}
                  className={`btn-mdq ${
                    c.variant === "primary"
                      ? "btn-mdq--primary"
                      : "btn-mdq--soft"
                  } btn-mdq--lg`}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
