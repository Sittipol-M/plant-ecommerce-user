import { CSSProperties } from "react"

export interface ButtonProps {
  style?: CSSProperties | null
  children?: string | null
  type?: "submit" | "reset" | "button" | undefined
}
