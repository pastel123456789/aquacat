import foto from '../assets/Fotos.png';



export function Home() {
  return (
    <div className="flex w-screen h-screen bg-azull items-center justify-center"> {/* Cor de fundo azul */}
      <section className="flex flex-col p-4 bg-azull items-center justify-center"> {/* Flexbox para alinhamento */}
        <h1 className='text-wht text-4xl mb-5 mt-5 font-lexend font-bold'>Início</h1>
        <img src={foto} alt="Bebedouro automático"  className="mb-5 rounded-lg" />
        <h2 className="text-wht bg-extend-fontFamily-coco-b font-lexend text-lg"> 
          Nosso produto é um bebedouro automático feito especificamente para gatos domésticos, 
          que tem como objetivo aumentar a hidratação e o conforto do gato, dando mais autonomia tanto para
          o gato e seu dono.
        </h2> 
        <a href="https://youtu.be/uL-nnhk1emY?si=pGWTsu8IMWwbnc9O"  target="_blank"  className="text-red-500 hover:text-blue-500 bg-white mt-5 rounded-lg">Veja o produto funcionando</a>
      </section>
    </div>
  );
}
