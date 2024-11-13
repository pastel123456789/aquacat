import M from '../assets/miguel.jpeg';
import K from '../assets/kauann.webp';

export function Sobre() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-blu p-8">
      <h1 className="text-wht text-4xl mb-8 font-lexend font-bold">SOBRE NÓS</h1>
      <section className="" >
        <div className='flex gap-10 justify-center mb-8'>
        <img
          src={M}
          alt="Miguel"
          className="w-[200px] h-[200px] object-cover rounded-full border-4 border-white shadow-lg"
        />
        <img
          src={K}
          alt="Kauan"
          className="w-[200px] h-[200px] object-cover rounded-full border-4 border-white shadow-lg"
        />
        </div>
        <p className="max-w-screen-sm ml-4 text-wht bg-extend-fontFamily-coco-b font-lexend text-lg mt-8">
        Somos Miguel e Kauan, alunos do ensino Médio técnico em Informática no colégio 
        UNASP. Somos os idealizadores do produto Aqua cat. Com foco especificamente na
        área dos gatos domesticos, desenvolvemos e criamos a empresa Aqua cat, pesquisamos
        a fundo a melhor maneira de realizar e tirar esse produto do papel. Para que nossa 
        empresa e produto sejam benéficos e tragam conforto para o animal e seu dono.
          </p>
      </section>
    </div>
  );
}
