import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./pages/Home"
import { Funcionamento } from "./pages/Funcionamento"
import { Materiais } from "./pages/Materiais"
import { Bibliografia } from "./pages/Bibliografia"
import { Sobre } from "./pages/Sobre"
import { Header } from "./Header"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/funcionamento",
    element: <Funcionamento />
  },
  {
    path: "/materiais",
    element: <Materiais />
  },
  {
    path: "/bibliografia",
    element: <Bibliografia />
  },
  {
    path: "/sobre",
    element: <Sobre />
  }
])

export function App() {
  return (
    <div>
    <Header />
    <RouterProvider router={router} /></div>
  )
}
