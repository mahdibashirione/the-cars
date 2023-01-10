import { createContext, useContext, useEffect, useReducer } from "react";

const ThemeProvider = createContext()
const ThemeDispatcher = createContext()



const ThemeContext = ({ children }) => {

  let initialState = localStorage.getItem("theme-car") ? JSON.parse(localStorage.getItem("theme-car")) : "light"

  const reducer = (state, action) => {
    switch (action.type) {
      case "Dark": {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme-car", JSON.stringify("dark"))
        return state = "dark";
      }
      case "Light": {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme-car", JSON.stringify("light"))
        return state = "light";
      }
      default: return state;
    }
  }

  useEffect(() => {
    initialState === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [])

  const [theme, setTheme] = useReducer(reducer, initialState)

  return (
    <ThemeProvider.Provider value={theme}>
      <ThemeDispatcher.Provider value={setTheme}>
        {children}
      </ThemeDispatcher.Provider>
    </ThemeProvider.Provider >
  );
}

export const useTheme = () => useContext(ThemeProvider)
export const useThemeDispatch = () => useContext(ThemeDispatcher)

export default ThemeContext;