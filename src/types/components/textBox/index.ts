import {
  CSSProperties,
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from "react"

export interface TextBoxProps {
  type?: HTMLInputTypeAttribute | undefined
  placeholder?: string
  size: "small" | "medium"
  name?: string | undefined
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined
  onClick?: MouseEventHandler<HTMLInputElement> | undefined
  value?: string | readonly string[] | number | undefined
  haveError?: boolean | undefined
  style?: CSSProperties | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | null
}
