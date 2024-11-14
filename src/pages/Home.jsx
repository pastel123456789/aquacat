import foto from '../assets/Fotos.png';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center w-screen bg-blu bg-cover bg-center"> {/* Cor de fundo azul */}
        <h1 className="text-wht text-4xl mb-20 mt-11 font-lexend font-bold">Início</h1>
        <img src={foto} alt="Bebedouro automático" className="rounded-lg" />
        <p className="max-w-screen-sm ml-4 text-wht bg-extend-fontFamily-coco-b font-lexend text-lg mt-10">
          Nosso produto é um bebedouro automático feito especificamente para gatos domésticos, 
          que tem como objetivo aumentar a hidratação e o conforto do gato, dando mais autonomia tanto para
          o gato e seu dono.
        </p>

         
    </div>
  );
}

