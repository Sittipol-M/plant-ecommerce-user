import { FC, useState } from "react"
import { TextBoxProps } from "../../types/components/textBox"
import "./textBox.css"
import { Icon } from "@iconify/react"

const TextBox: FC<TextBoxProps> = ({
  type,
  placeholder,
  size,
  name,
  onBlur,
  onClick,
  value,
  haveError,
  style,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<TextBoxProps["value"]>("")

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div style={{ width: style?.width }}>
      <input
        className={`text-box-input-${size}`}
        type={type !== "password" ? type : showPassword ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange ? onChange : (e) => setInputValue(e.target.value)}
        value={value ? value : inputValue}
        style={{
          marginLeft: "-10px",
          border: "1.5px solid grey",
          borderRadius: "4px",
          borderColor: haveError ? "red" : "",
          ...style,
        }}
      />
      {type === "password" ? (
        <Icon
          onClick={handleToggleShowPassword}
          icon={showPassword ? "tabler:eye-off" : "akar-icons:eye"}
          className="text-box-icon"
          height="20px"
          width="20px"
          style={{
            marginBottom: "-3px",
          }}
        />
      ) : null}
    </div>
  )
}

export default TextBox
