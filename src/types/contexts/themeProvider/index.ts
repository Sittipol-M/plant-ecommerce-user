import { ReactElement } from "react"

export interface ThemeProviderFields {
  themeColors: ThemeColors
  fontFamily: string
}

export interface ThemeColors {
  primary: string
  inactive: string
}

export interface ThemeProviderProps {
  children: ReactElement
}
