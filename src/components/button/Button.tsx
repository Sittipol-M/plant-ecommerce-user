import { FC } from "react"
import { ButtonProps } from "../../types/components/button"
import "./button.css"

const Button: FC<ButtonProps> = ({ style, children,type }) => {
  return (
    <button className="button-container" type={type} style={{ ...style }}>
      {children}
    </button>
  )
}

export default Button
