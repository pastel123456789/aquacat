import beb from '../assets/be.png';

export function Funcionamento() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-blu">
      <h1 className="text-wht text-3xl mb-20 mt-11">Funcionamento</h1>
      <div className='flex justify-center'>
      <section className="flex items-center justify-center space-x-4">
        <img src={beb} alt="Bebedouro automático" className="max-w-sm h-96 object-cover mb-11" />
        <p className="max-w-screen-sm text-wht mb-60 ">
          O bebedouro automático contém um reservatório de água e um sensor. Quando o sensor detecta a presença do gato, ele liga a bomba que faz a água fluir de
           forma cíclica pelo bebedouro.
        </p>
      </section>
      </div>
    </div>
  );
}
