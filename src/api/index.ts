import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access-token")
  if (accessToken) {
    config.withCredentials = true
    config.headers["Content-Type"] = "application/json"
    config.headers.Authorization = `bearer ${accessToken}`
  }

  return config
})

export default api
