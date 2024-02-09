import { Controller, useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterFormData } from "../../types/pages/login"

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(validateRegisterSchema),
    defaultValues: { username: "", password: "", confirmPassword: "" },
  })

  const onSubmit = async (registerFormData: RegisterFormData) => {
    if (register) await register(registerFormData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <h1>Register</h1>
        <label>username</label>
        <Controller
          name="username"
          control={control}
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
          name="password"
          control={control}
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

        <label>confirm password</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => {
            return (
              <input
                style={{
                  borderColor: errors.confirmPassword ? "red" : "ActiveBorder",
                }}
                type="password"
                {...field}
              />
            )
          }}
        />
        <button type="submit">Register</button>
      </div>
    </form>
  )
}

export default Register
