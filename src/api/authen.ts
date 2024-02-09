import api from "."
import { LoginResponse } from "../types/api/authen"
import { LoginFormData } from "../types/pages/login/index"
export const LoginService = async (
  loginFormData: LoginFormData
): Promise<LoginResponse> => {
  const { data }: { data: LoginResponse } = await api.post(
    "/login",
    loginFormData
  )
  return data
}
