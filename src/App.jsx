import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./pages/Home"
import { Funcionamento } from "./pages/Funcionamento"
import { Materiais } from "./pages/Materiais"
import { Bibliografia } from "./pages/Bibliografia"
import { Sobre } from "./pages/Sobre"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
