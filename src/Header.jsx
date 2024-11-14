import gato from './assets/logo.png'

import { List, X } from "@phosphor-icons/react"

import { useState } from "react"



export function Header() {
  //coloque as variáveis e a função aqui!!!
  const [abrirMenu, setAbrirMenu] = useState(false)

  function handleAbrirFecharMenu() {
    if (abrirMenu === true) {
      setAbrirMenu(false)
      return
    }

    setAbrirMenu(true)
  }

  return (
    <header>
      <div class="lg:hidden">
        <div className='flex justify-between p-4'>
          <img src={gato} alt="" className="max-w-sm max-lg:h-10 lg:h-40 object-cover" />
          <button onClick={handleAbrirFecharMenu}>
            {abrirMenu === true ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
          </button>
        </div>

        <nav className={`bg-but text-wht flex flex-col w-60 h-screen text-center gap-5 fixed ${abrirMenu === true ? "right-0" : "-right-60"} transition-all delay-150`}>
          <a href="/" >Início</a>
          <a href="/Funcionamento"  >Funcionamento</a>
          <a href="/Materiais"  >Materiais</a>
          <a href="/Bibliografia"  >Bibliografia</a>
          <a href="/Sobre"  >Sobre nós</a>
          <a href="/Jogo"  >Jogos</a>
          </nav>
      </div>

      <div class="hidden lg:block flex-col">
        <div className="ml-10 flex items-center justify-center">
          <img src={gato} alt="" className="max-w-sm max-lg:h-10 lg:h-40 object-cover" />
        </div>
        <div className="flex max-lg:flex-col itens-center text-wht space-x-4 text-center justify-center h-full w-full mb-10">
          <a href="/" className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px] font-lexand font-bold">Início</a>
          <a href="/Funcionamento"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px] font-lexand font-bold">Funcionamento</a>
          <a href="/Materiais"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px] font-lexand font-bold">Materiais</a>
          <a href="/Bibliografia"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px] font-lexand font-bold">Bibliografia</a>
          <a href="/Sobre"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px] font-lexand font-bold">Sobre nós</a>
          <a href="/Jogo"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px] font-lexand font-bold">Jogos</a>
        </div>
      </div>
    </header>
    
  )
}
