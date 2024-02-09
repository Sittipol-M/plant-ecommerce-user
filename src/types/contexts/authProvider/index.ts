import { User } from "../../api/authen"
import { LoginFormData } from "../../pages/login"

export interface AuthContextFields {
  login?: (loginFormData: LoginFormData) => Promise<void>
  user?: User | null
}
