import { Controller, useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterFormData } from "../../types/pages/login"
import TextBox from "../../components/textBox/TextBox"
import useTheme from "../../hooks/useTheme"
import { CSSProperties } from "react"
import Card from "../../components/card/Card"
import Button from "../../components/button/Button"

const validateRegisterSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password not equal to confirm password")
    .required(),
})

const Register = () => {
  const { register } = useAuth()
  const { themeColors, fontFamily } = useTheme()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(validateRegisterSchema),
    defaultValues: { username: "", password: "", confirmPassword: "" },
  })

  const containerStyle: CSSProperties = {
    backgroundColor: themeColors.primary,
    height: "100vh",
    width: "100vw",
  }

  const centerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const headerStyle: CSSProperties = {
    marginTop: "50px",
    fontFamily,
  }

  const onSubmit = async (registerFormData: RegisterFormData) => {
    if (register) await register(registerFormData)
  }

  return (
    <div style={{ ...containerStyle, ...centerStyle }}>
      <Card style={{ width: "400px", height: "500px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              ...centerStyle,
              flexDirection: "column",
              rowGap: "35px",
            }}
          >
            <h1 style={{ ...headerStyle }}>Register</h1>
            <Controller
              name="username"
              control={control}
              render={({ field }) => {
                return (
                  <TextBox
                    style={{ width: "270px" }}
                    size="medium"
                    placeholder="Username"
                    type="text"
                    haveError={!!errors.username}
                    {...field}
                  />
                )
              }}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <TextBox
                    style={{ width: "270px" }}
                    size="medium"
                    placeholder="Password"
                    type="password"
                    haveError={!!errors.password}
                    {...field}
                  />
                )
              }}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => {
                return (
                  <TextBox
                    style={{ width: "270px" }}
                    size="medium"
                    placeholder="Confirm password"
                    type="password"
                    haveError={!!errors.confirmPassword}
                    {...field}
                  />
                )
              }}
            />
            <Button
              style={{
                width: "285px",
                height: "40px",
                margin: "10px 10px 10px",
              }}
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Register
