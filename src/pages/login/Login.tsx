import { Controller, useForm } from "react-hook-form"
import { LoginFormData } from "../../types/pages/login"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useAuth from "../../hooks/useAuth"

const validateLoginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
})

const Login = () => {
  const { login } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(validateLoginSchema),
    defaultValues: { username: "", password: "" },
  })

  const onSubmit = async (loginFormData: LoginFormData) => {
    if (login) await login(loginFormData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        <h1>Login</h1>
        <label>username</label>
        <Controller
          control={control}
          name="username"
          render={({ field }) => {
            return (
              <input
                style={{
                  borderColor: errors.username ? "red" : "ActiveBorder",
                }}
                type="text"
                {...field}
              />
            )
          }}
        />
        <label>password</label>
        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            return (
              <input
                style={{
                  borderColor: errors.password ? "red" : "ActiveBorder",
                }}
                type="password"
                {...field}
              />
            )
          }}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default Login
