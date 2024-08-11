import gato from './assets/Cat.jpg'

export function Header() {
  return (
    <div className="flex items-center justify-center">
      <div className="">
      <img src={gato} alt="" className="max-w-sm h-40 object-cover mx-8" />
      </div>
      <div className="flex w-5000 itens-center text-wht space-x-4" justify-center>
        <button className="rounded-lg bg-but text-white h-8 w-[120px]">Início</button>
        <button className="rounded-lg bg-but text-white h-8 w-[120px]">Funcionamento</button>
        <button className="rounded-lg bg-but text-white h-8 w-[120px]">Materiais</button>
        <button className="rounded-lg bg-but text-white h-8 w-[120px]">Bibliografia</button>
        <button className="rounded-lg bg-but text-white h-8 w-[120px]">Sobre nós</button>
      </div>
    </div>
    
  )
}
