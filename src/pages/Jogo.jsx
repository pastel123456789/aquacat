import Pro from '../assets/PREVIEW - This is how it will look like!.png';

export function Jogo() {
      return (
        <div className="flex w-screen h-screen bg-azull items-center justify-center"> {/* Cor de fundo azul */}
          <section className="flex flex-col bg-azull"> {/* Flexbox para alinhamento */}
          <img src={Pro} alt="Bebedouro automático"  className="w-[800px] h-[533px] object-cover rounded-lg" />
            <h2 className="max-w-screen-sm text-wht bg-extend-fontFamily-coco-b font-lexend text-lg"> 
            Escape with cat é um jogo que gira em torno de dois gatos com sede que buscam água para sobreviverem no grande deserto. Juntos enfrentam inimigos e superam grandes desafios  <a href="https://youtu.be/ORjywQD5toM"  target="_blank"  className="text-red-500 hover:text-blue-500">Prévia do jogo</a>
            </h2> 
          </section>
        </div>
      );
    }

  


