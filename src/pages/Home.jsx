import foto from '../assets/Fotos.png';

export function Home() {
  return (
    <div className="flex w-screen h-screen bg-blu items-center justify-center"> {/* Cor de fundo azul */}
      <section className="flex flex-col p-4 bg-blu items-center justify-center"> {/* Flexbox para alinhamento */}
        <h1 className="text-wht text-4xl mb-12 mt-10 font-lexend font-bold">Início</h1>
        <img src={foto} alt="Bebedouro automático" className="mb-5 rounded-lg" />
        <h2 className="text-wht bg-extend-fontFamily-coco-b font-lexend text-lg text-justify">
          Nosso produto é um bebedouro automático feito especificamente para gatos domésticos, 
          que tem como objetivo aumentar a hidratação e o conforto do gato, dando mais autonomia tanto para
          o gato e seu dono.
        </h2>
      </section>
    </div>
  );
}

