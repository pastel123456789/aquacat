export function Jogo() {
  return (
    <div className="min-h-screen flex flex-col items-center w-screen bg-blu bg-cover bg-center"> 
    <h1 className="text-wht text-4xl mb-20 mt-11 font-lexend font-bold">Jogo</h1>
    <div className='flex justify-center'>
      <section className="flex flex-col bg-blu"> 
      
      
        <iframe
          width=""
          height="415"
          src="https://www.youtube.com/embed/ORjywQD5toM" 
          title="Escape with Cat - Jogo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mb-11 rounded-lg"
        />
        
        <h2 className="max-w-screen-sm text-wht bg-extend-fontFamily-coco-b font-lexend text-lg ">
          Escape with Cat é um jogo que gira em torno de dois gatos com sede que buscam água para sobreviverem
          no grande deserto. Juntos enfrentam inimigos e superam grandes desafios.
        </h2>
      </section>
      </div>
    </div>
  );
}


  


