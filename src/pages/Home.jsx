// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Hero from "../components/Hero";

export default function Home() {
  // 🔗 Links Cloudinary (usa tus URLs completas)
  const HERO_URL =
    "https://res.cloudinary.com/du0bcauzw/image/upload/v1760199821/hero-abstracto-teal_muz6v2.webp";
  const CARD_URL_1 =
    "https://res.cloudinary.com/du0bcauzw/image/upload/v1758987843/Firma_en_el_despacho_profesional_ezplgs.png";
  const CARD_URL_2 =
    "https://res.cloudinary.com/du0bcauzw/image/upload/v1759073582/ChatGPT_Image_28_sept_2025_17_32_38_k1jhz9.png";
  const CARD_URL_3 =
    "https://res.cloudinary.com/du0bcauzw/image/upload/v1759076222/ChatGPT_Image_28_sept_2025_18_16_40_awtqzb.png";
  const CARD_URL_4 =
    "https://res.cloudinary.com/du0bcauzw/image/upload/v1759079860/ChatGPT_Image_28_sept_2025_19_17_23_wlx77j.png";
  const CARD_URL_5 =
    "https://res.cloudinary.com/du0bcauzw/image/upload/v1759078714/ChatGPT_Image_28_sept_2025_18_58_11_m1ilvd.png";
  const CARD_URL_6 =
    "https://res.cloudinary.com/du0bcauzw/image/upload/v1759079508/ChatGPT_Image_28_sept_2025_19_11_27_c0zu6v.png";
  const CARD_URL_7 =
    "https://res.cloudinary.com/du0bcauzw/image/upload/v1759077682/ChatGPT_Image_28_sept_2025_18_40_59_ubhue2.png";

  const temasHome = [
    {
      titulo: "Residencia geriátrica",
      texto: "Cobertura del 100% del geriátrico cuando corresponde.",
      to: "/servicios#geriatrica",
      img: CARD_URL_1,
    },
    {
      titulo: "Seguir en tu obra social al jubilarte",
      texto: "El pase a PAMI no es obligatorio, podés mantener tu cobertura.",
      to: "/servicios#obra-social-jubilacion",
      img: CARD_URL_2,
    },
    {
      titulo: "Prótesis y órtesis",
      texto:
        "Cobertura de prótesis indicadas por tu médico, incluso importadas si no hay equivalente.",
      to: "/servicios#protesis-ortesis",
      img: CARD_URL_3,
    },
    {
      titulo: "Tratamiento o medicación denegada",
      texto:
        "Aunque no figure en el PMO, puede corresponder según indicación médica.",
      to: "/servicios#tratamiento-negado",
      img: CARD_URL_4,
    },
    {
      titulo: "Cobertura parcial de medicación",
      texto:
        "Muchas veces cubren menos porcentaje del debido. Conozca lo que corresponde.",
      to: "/servicios#medicacion-parcial",
      img: CARD_URL_5,
    },
    {
      titulo: "Preexistencias y afiliación",
      texto:
        "No pueden rechazarte ni fijar cuotas extraordinarias por enfermedades preexistentes.",
      to: "/servicios#preexistencias",
      img: CARD_URL_6,
    },
    {
      titulo: "Tratamientos particulares",
      texto:
        "Bariátrica, oncológicos y fertilidad: requisitos y cobertura integral cuando aplica.",
      to: "/servicios#tratamientos-particulares",
      img: CARD_URL_7,
    },
  ];

  // Micro reveal (animación suave al entrar en viewport)
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Hero
        bgUrl={HERO_URL}
        title="Especialistas en Derecho a la Salud – Mar del Plata"
        lead="Protegemos tu derecho a la salud: coberturas, medicamentos, tratamientos y prestaciones."
        ctas={[
          { to: "/servicios", label: "Ver servicios", variant: "primary" },
          { to: "/como-actuar", label: "Cómo actuar", variant: "soft" },
          { to: "/contacto", label: "Contacto", variant: "soft" },
        ]}
      />

      <section className="container" aria-labelledby="srv" aria-live="polite">
        <h2 id="srv" className="section-title-mdq">
          ¿En qué podemos ayudarte?
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          style={{ paddingBottom: "28px" }}
          aria-label="Carrusel de servicios"
        >
          {temasHome.map((card, i) => (
            <SwiperSlide key={i} aria-roledescription="slide">
              <article className="card-mdq reveal h-100">
                <img
                  className="card-mdq__img"
                  src={card.img}
                  alt={card.titulo}
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="420"
                />
                <div className="card-mdq__body">
                  <h3 className="card-mdq__title">{card.titulo}</h3>
                  <p className="card-mdq__text">{card.texto}</p>
                  <div className="card-mdq__actions">
                    <Link
                      to={card.to}
                      className="btn-mdq btn-mdq--primary btn-mdq--sm"
                    >
                      Leer más
                    </Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="container">
        <div
          className="callout-mdq reveal"
          role="complementary"
          aria-label="Confianza"
        >
          <div className="callout-mdq__inner">
            <p className="fs-5 mb-3">
              <strong>25 años de trayectoria</strong> en derecho a la salud y
              amparos en Mar del Plata.
            </p>
            <Link className="btn-mdq btn-mdq--primary btn-mdq--lg" to="/contacto">
              Quiero mi consulta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
