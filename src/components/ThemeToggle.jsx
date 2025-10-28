import useTheme from "../hooks/useTheme";

export default function ThemeToggle({ compact = false }) {
  const { theme, setTheme } = useTheme("institucional");

  if (compact) {
    // 3 pill buttons
    return (
      <div aria-label="Cambiar tema" className="d-flex align-items-center gap-2">
        {["institucional", "moderna", "calida"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            className={`btn-mdq btn-mdq--sm ${theme===t ? "btn-mdq--primary" : "btn-mdq--soft"}`}
            aria-pressed={theme===t}
          >
            {t === "institucional" ? "Institucional" : t === "moderna" ? "Moderna" : "Cálida"}
          </button>
        ))}
      </div>
    );
  }

  // dropdown
  return (
    <label className="d-inline-flex align-items-center gap-2">
      <span className="text-muted" style={{fontSize:".9rem"}}>Tema:</span>
      <select
        value={theme}
        onChange={(e)=>setTheme(e.target.value)}
        className="form-select form-select-sm"
        aria-label="Selector de tema"
        style={{minWidth: 160}}
      >
        <option value="institucional">Institucional</option>
        <option value="moderna">Moderna</option>
        <option value="calida">Cálida</option>
      </select>
    </label>
  );
}
