import Pro from '../assets/promo.png';

export function Jogo() {
      return (
        <div className="flex w-screen h-screen bg-azull items-center justify-center"> {/* Cor de fundo azul */}
          <section className="flex max-lg:flex-col p-4 bg-azull items-center justify-center"> {/* Flexbox para alinhamento */}
          <img src={Pro} alt="Bebedouro automático"  className="max-lg:h-80 max-lg:w-80 lg:max-w-2xl max-h-96 object-cover -mt-80 rounded-lg" />
            <h2 className="max-w-screen-sm ml-4 text-wht mb-80 bg-extend-fontFamily-coco-b font-lexend text-lg -mt-72"> 
            Escape with cat é um jogo que gira em torno de dois gatos com sede que buscam água para sobreviverem no grande deserto. Juntos enfrentam inimigos e superam grandes desafios  <a href="https://youtu.be/ORjywQD5toM"  target="_blank"  className="text-red-500 hover:text-blue-500">Prévia do jogo</a>
            </h2> 
          </section>
        </div>
      );
    }

  


