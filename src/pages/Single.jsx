import { useParams } from "react-router-dom";

export default function Single() {
  const { slug } = useParams();
  return (
    <article>
      <h1 className="h3">Recurso: {slug}</h1>
      <p>Esta es una página de ejemplo para un recurso individual.</p>
    </article>
  );
}
