import beb from '../assets/be.png';

export function Funcionamento() {
  return (
    <div className="min-h-screen flex flex-col items-center w-screen bg-blu bg-cover bg-center">
      <h1 className="text-wht text-4xl mb-20 mt-11 font-lexend font-bold">Funcionamento</h1>
      <div className='flex justify-center'>
        <section className="flex flex-col items-center justify-center">
          <img 
            src={beb} 
            alt="Bebedouro automático" 
            className="max-lg:w-50 max-lg:h-50 max-w-sm h-96 object-cover mb-11 rounded-lg" 
          />
          
          <h2 className="max-w-screen-sm ml-4 text-wht bg-extend-fontFamily-coco-b font-lexend text-lg -mt-10">
            O bebedouro automático contém um reservatório de água e um sensor. Quando o sensor detecta a presença do gato, ele liga a bomba que faz a água fluir de forma cíclica pelo bebedouro. 
          </h2>
          
          <h2 className="max-w-screen-sm ml-4 text-wht bg-extend-fontFamily-coco-b font-lexend text-lg mt-4">
            Primeiramente, conecte uma bateria de 9 volts no adaptador, em seguida conecte o bebedouro na tomada. Após isso, insira 3 litros de água no reservatório do bebedouro, que equivale a 3 semanas de água para o seu gato. Reponha sempre a água! Assim, o bebedouro estará funcionando para o uso do seu gato.
          </h2>
          
          <h2 className="max-w-screen-sm ml-4 text-wht bg-extend-fontFamily-coco-b font-lexend text-lg mt-4">
            Acesse nosso app e se conecte com o bluetooth. No app, você receberá informações como: temperatura da água, para trazer mais conforto na hidratação do seu gato, e o nível da água para te avisar o quanto de água resta no reservatório.
          </h2>

        </section>
      </div>
    </div>
  );
}