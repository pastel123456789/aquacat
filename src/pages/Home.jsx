import foto from '../assets/4.webp';

export function Home() {
  return (
    <div className="flex w-screen h-screen bg-azull items-center justify-center"> {/* Cor de fundo azul */}
      <section className="flex max-lg:flex-col p-4 bg-azull items-center justify-center"> {/* Flexbox para alinhamento */}
        <img src={foto} alt="Bebedouro automático" className="max-lg:h-40 max-lg:w-40 lg:max-w-sm max-h-96 object-cover -mt-20" /> {/* Imagem com tamanho máximo e altura fixa */}
        <h2 className="max-w-screen-sm ml-4 text-wht mb-80 bg-extend-fontFamily-coco-b font-lexend text-lg -mt-16"> 
          Nosso produto é um bebedouro automático feito especificamente para gatos domésticos, 
          que tem como objetivo aumentar a hidratação e o conforto do gato, dando mais autonomia tanto para
          o gato e seu dono.
        </h2>
      </section>
    </div>
  );
}
