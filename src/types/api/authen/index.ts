export interface LoginResponse {
  user: User
  accessToken: string
}

export interface User {
  username: string
  role: string
}
