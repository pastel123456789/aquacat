import gato from './assets/logo.png'

export function Header() {
  return (
    <header className="flex max-lg:flex-col items-center justify-center">
      <div className="ml-10">
      <img src={gato} alt="" className="max-w-sm max-lg:h-10 lg:h-40 object-cover" />
      </div>
      <div className="flex max-lg:flex-col itens-center text-wht space-x-4 text-center justify-center h-full w-full">
        <a href="/" className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px]">Início</a>
        <a href="/Funcionamento"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px]">Funcionamento</a>
        <a href="/Materiais"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px]">Materiais</a>
        <a href="/Bibliografia"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px]">Bibliografia</a>
        <a href="/Sobre"  className="rounded-lg bg-but text-white max-lg:w-full h-8 w-[120px]">Sobre nós</a>
      </div>
    </header>
    
  )
}
