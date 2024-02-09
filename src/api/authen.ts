import { RegisterFormData } from "./../types/pages/login/index"
import api from "."
import { LoginResponse } from "../types/api/authen"
import { LoginFormData } from "../types/pages/login/index"
export const loginService = async (
  loginFormData: LoginFormData
): Promise<LoginResponse> => {
  const { data }: { data: LoginResponse } = await api.post(
    "/login",
    loginFormData
  )
  return data
}

export const registerService = async (registerFormData: RegisterFormData) => {
  await api.post("/register", registerFormData)
}
