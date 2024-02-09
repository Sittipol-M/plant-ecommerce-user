import CryptoJS from "crypto-js"
import { User } from "../types/api/authen"

export const encryptUser = (user: User): string => {
  const encryptData = CryptoJS.AES.encrypt(
    JSON.stringify(user),
    import.meta.env.VITE_USER_ENCRYPT_KEY as string
  )
  return encryptData.toString()
}
