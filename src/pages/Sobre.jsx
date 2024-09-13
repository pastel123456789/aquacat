import M from '../assets/miguel.jpeg';
import K from '../assets/kauann.webp';

export function Sobre() {
  return (
    <div className="flex flex-col items-center w-screen  bg-blu p-8">
      <h1 className="text-wht text-4xl mb-8 font-lexend font-bold">SOBRE NÓS</h1>
      <section className="flex max-lg:flex-col items-center gap-8 mt-10" >
        <img
          src={M}
          alt="Miguel"
          className="w-[200px] h-[200px] object-cover rounded-full border-4 border-white shadow-lg"
        />
        <img
          src={K}
          alt="Kauan"
          className="w-[200px] h-[200px] object-cover rounded-full border-4 border-white shadow-lg mr-70"
        />
        <p className="text-wht text-lg font-lexend">
        Somos Miguel e Kauan, alunos do ensino <br />
        Médio técnico em Informática no colégio <br />
        UNASP. Somos os idealizadores do produto <br />
        Aqua cat. Com foco especificamente na área <br />
        dos gatos, desenvolvemos e criamos a empresa <br />
        Aqua cat, pesquisamos a fundo a melhor maneira <br />
        de realizar e tirar esse produto do papel. Para <br />
        que nossa empresa e produto sejam benéficos e tragam <br />
        conforto para o animal e seu dono.
          </p>
      </section>
    </div>
  );
}
