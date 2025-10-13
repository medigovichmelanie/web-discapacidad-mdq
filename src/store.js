export const initialState = {
  theme: "light",
  contacto: { email: "info@discapacidadmdq.com.ar", telefono: "+54 9 223 ..." },
};

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}
