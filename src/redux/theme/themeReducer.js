import { useEffect } from "react";
import { Theme_Dark, Theme_Light } from "./themeType";

let initialStateTheme = localStorage.getItem("theme-car") ? JSON.parse(localStorage.getItem("theme-car")) : "light"

const themeReducer = (state = initialStateTheme, action) => {
  switch (action.type) {
    case Theme_Dark: {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme-car", JSON.stringify("dark"))
      return state = "dark";
    }
    case Theme_Light: {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme-car", JSON.stringify("light"))
      return state = "light";
    }
    default: return state;
  }
}

export default themeReducer;