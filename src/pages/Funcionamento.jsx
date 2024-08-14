import beb from '../assets/be.png';

export function Funcionamento() {
  return (
    <div className="max-lg:max-w-500 flex flex-col items-center w-screen h-screen bg-blu">
      <h1 className="text-wht text-3xl mb-20 mt-11 font-lexend font-bold">Funcionamento</h1>
      <div className='flex justify-center'>
      <section className="max-lg:flex-col flex items-center justify-center space-x-4">
        <img src={beb} alt="Bebedouro automático" className="max-lg:w-50 max-lg:h-50 max-w-sm h-96 object-cover mb-11" />
        <p className="max-w-screen-sm text-wht mb-60 font-lexend">
          O bebedouro automático contém um reservatório de água e um sensor. Quando o sensor detecta a presença do gato, ele liga a bomba que faz a água fluir de
           forma cíclica pelo bebedouro.
        </p>
      </section>
      </div>
    </div>
  );
}
