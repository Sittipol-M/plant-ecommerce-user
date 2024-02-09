import { User } from "../../api/authen"
import { LoginFormData, RegisterFormData } from "../../pages/login"

export interface AuthContextFields {
  login?: (loginFormData: LoginFormData) => Promise<void>
  register?: (registerFormData: RegisterFormData) => Promise<void>
  user?: User | null
}
