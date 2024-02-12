import React, { FC, createContext } from "react"
import {
  ThemeColors,
  ThemeProviderFields,
  ThemeProviderProps,
} from "../types/contexts/themeProvider"

const themeColors: ThemeColors = {
  primary: "#4070f4",
  inactive: "#f8f8f8",
}

const initialState: ThemeProviderFields = {
  themeColors,
  fontFamily: "Nunito",
}

export const ThemeContext = createContext<ThemeProviderFields>(initialState)

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={initialState}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
