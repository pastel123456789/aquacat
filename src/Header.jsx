import gato from './assets/logo.png'

export function Header() {
  return (
    <div className="flex items-center justify-center">
      <div className="">
      <img src={gato} alt="" className="max-w-sm h-40 object-cover mx-8" />
      </div>
      <div className="flex w-5000 itens-center text-wht space-x-4 text-center">
        <a href="/" className="rounded-lg bg-but text-white h-8 w-[120px]">Início</a>
        <a href="/Funcionamento"  className="rounded-lg bg-but text-white h-8 w-[120px]">Funcionamento</a>
        <a href="/Materiais"  className="rounded-lg bg-but text-white h-8 w-[120px]">Materiais</a>
        <a href="/Bibliografia"  className="rounded-lg bg-but text-white h-8 w-[120px]">Bibliografia</a>
        <a href="/Sobre"  className="rounded-lg bg-but text-white h-8 w-[120px]">Sobre nós</a>
      </div>
    </div>
    
  )
}
