import { FC } from "react"
import { ErrorLabelProps } from "../../types/components/errorLabel"

const ErrorLabel: FC<ErrorLabelProps> = ({ errorMessage }) => {
  if (errorMessage) return <div style={{ color: "red" }}>{errorMessage}</div>
  return <></>
}

export default ErrorLabel
