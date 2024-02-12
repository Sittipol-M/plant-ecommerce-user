import { FC } from "react"
import { CardProps } from "../../types/components/card"
import "./card.css"

const Card: FC<CardProps> = ({ children, style, className }) => {
  return (
    <div className={`card-container ${className}`} style={style}>
      {children}
    </div>
  )
}

export default Card
