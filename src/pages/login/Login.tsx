import { Controller, useForm } from "react-hook-form"
import { LoginFormData } from "../../types/pages/login"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useAuth from "../../hooks/useAuth"
import Card from "../../components/card/Card"
import TextBox from "../../components/textBox/TextBox"
import Button from "../../components/button/Button"
import { CSSProperties } from "react"
import useTheme from "../../hooks/useTheme"
import ErrorLabel from "../../components/errorLabel/ErrorLabel"

const validateLoginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
})

const Login = () => {
  const { login } = useAuth()
  const { themeColors, fontFamily } = useTheme()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(validateLoginSchema),
    defaultValues: { username: "", password: "" },
  })

  const centerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const containerStyle: CSSProperties = {
    backgroundColor: themeColors.primary,
    width: "100vw",
    height: " 100vh",
  }

  const headerStyle: CSSProperties = {
    fontFamily,
    fontWeight: "700",
  }

  const onSubmit = async (loginFormData: LoginFormData) => {
    if (login) await login(loginFormData)
  }

  return (
    <div style={{ ...centerStyle, ...containerStyle }}>
      <Card style={{ width: "400px", height: "400px", ...centerStyle }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            ...centerStyle,
          }}
        >
          <h1 style={{ ...headerStyle }}>Login</h1>
          <div>
            <Controller
              control={control}
              name="username"
              render={({ field }) => {
                return (
                  <TextBox
                    haveError={!!errors.username}
                    type="text"
                    placeholder="Username"
                    size="medium"
                    style={{ width: "270px" }}
                    {...field}
                  />
                )
              }}
            />
            <ErrorLabel errorMessage={errors.username?.message} />
          </div>
          <div>
            <Controller
              control={control}
              name="password"
              render={({ field }) => {
                return (
                  <TextBox
                    haveError={!!errors.password}
                    type="password"
                    placeholder="Password"
                    size="medium"
                    {...field}
                    style={{ marginTop: "20px", width: "270px" }}
                  />
                )
              }}
            />
            <ErrorLabel errorMessage={errors.password?.message} />
          </div>

          <Button
            style={{
              width: "285px",
              height: "40px",
              margin: "30px 10px 10px 10px",
            }}
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default Login
