import { useEffect, useState } from "react";

const KEY = "mdq-theme";

export default function useTheme(initial = "institucional") {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(KEY) || initial;
  });

  // aplica en <body> y persiste
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
  }, [theme]);

  return { theme, setTheme };
}
