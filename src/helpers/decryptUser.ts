import { User } from "../types/api/authen"
import CryptoJs from "crypto-js"

export const decryptUser = (encryptData: string): User | null => {
  if (encryptData == "") return null
  const bytes = CryptoJs.AES.decrypt(
    encryptData,
    import.meta.env.VITE_USER_ENCRYPT_KEY
  )
  const user: User = JSON.parse(bytes.toString(CryptoJs.enc.Utf8))
  return user
}
