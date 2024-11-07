import foto from '../assets/Fotos.png';



export function Home() {
  return (
    <div className="flex w-screen h-screen bg-azull items-center justify-center"> {/* Cor de fundo azul */}
      <section className="flex max-lg:flex-col p-4 bg-azull items-center justify-center"> {/* Flexbox para alinhamento */}
      <img src={foto} alt="Bebedouro automático"  className="max-lg:h-80 max-lg:w-80 lg:max-w-2xl max-h-96 object-cover -mt-80 rounded-lg" />
        <h2 className="max-w-screen-sm ml-4 text-wht mb-80 bg-extend-fontFamily-coco-b font-lexend text-lg -mt-72"> 
          Nosso produto é um bebedouro automático feito especificamente para gatos domésticos, 
          que tem como objetivo aumentar a hidratação e o conforto do gato, dando mais autonomia tanto para
          o gato e seu dono. <a href="https://youtu.be/uL-nnhk1emY?si=pGWTsu8IMWwbnc9O"  target="_blank"  className="text-red-500 hover:text-blue-500">Veja o produto funcionando</a>
        </h2> 
      </section>
    </div>
  );
}
