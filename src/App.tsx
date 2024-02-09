import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./contexts/AuthProvider"
import Home from "./pages/home/Home"
import NoPage from "./pages/noPage/NoPage"
import Login from "./pages/login/Login"
import AuthRoutes from "./pages/authRoutes/AuthRoutes"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route>
            <Route path="*" Component={NoPage} />
            <Route path="login" Component={Login} />
            <Route Component={AuthRoutes}>
              <Route path="/" Component={Home} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
