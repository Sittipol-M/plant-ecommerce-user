import { FC, ReactElement, createContext, useState } from "react"
import { LoginService } from "../api/authen"
import { LoginFormData } from "../types/pages/login"
import { User } from "../types/api/authen"
import { encryptUser } from "../helpers/encryptUser"
import { decryptUser } from "../helpers/decryptUser"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { AuthContextFields } from "../types/contexts/authProvider"

export const AuthContext = createContext<AuthContextFields>({})

const AuthProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(
    decryptUser(Cookies.get("user") || "")
  )
  const navigate = useNavigate()

  const login = async (loginFormData: LoginFormData) => {
    try {
      const { user: loginUser, accessToken } = await LoginService(loginFormData)
      setUser(loginUser)
      localStorage.setItem("access-token", accessToken)
      Cookies.set("user", encryptUser(loginUser), {
        expires: 1,
        sameSite: "Strict",
      })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
