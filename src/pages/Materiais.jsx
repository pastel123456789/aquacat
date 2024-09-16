import A from '../assets/ard.png';
import Ba from '../assets/bat.png';
import Bo from '../assets/bom.png';
import F from '../assets/fio.png';
import P from '../assets/prot.png';
import S from '../assets/sens.png';

export function Materiais() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-blu p-4">
      <h1 className="text-wht text-4xl mb-8 fonr font-lexend font-bold">Materiais</h1>
      <div className="flex flex-col space-y-8 w-full max-w-screen-lg">
        <div className="flex items-center space-x-4">
          <img
            src={Bo}
            alt="Placa Arduino"
            className="max-lg:w-[80px] max-lg:h-[50px] w-[320px] h-[200px] object-cover"
          />
          <p className="text-wht text-lg font-lexend font-bold">
          Bomba de Água: Componente que movimenta a água no sistema. <br /> R$ 40.00
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={Ba}
            alt="Bateria"
            className="w-[370px] h-[410px] object-cover"
          />
          <p className="text-wht text-lg font-lexend font-bold">
            Bateria: Fonte de energia para alimentar o circuito. <br /> R$ 39.99
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={A}
            alt="Bomba de água"
            className="w-[370px] h-[400px] object-cover"
          />
          <p className="text-wht text-lg font-lexend font-bold">
          Placa Arduino: Um microcontrolador usado para prototipagem eletrônica. <br /> R$ 90.00
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-12">
          <img
            src={F}
            alt="Fio"
            className="w-[380px] h-[420px] object-cover"
          />
          <p className="text-wht text-lg font-lexend font-bold">
            Fio: Conecta os diferentes componentes do circuito. <br /> R$ 1.99
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={P}
            alt="Protoboard"
            className="w-[380px] h-[420px] object-cover"
          />
          <p className="text-wht text-lg font-lexend font-bold">
            Protoboard: Placa de ensaio para montar circuitos eletrônicos. <br /> R$ 10.00
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={S}
            alt="Sensor"
            className="w-[380px] h-[420px] object-cover"
          />
          <p className="text-wht text-lg mb-8 font-lexend font-bold">
            Sensor: Dispositivo para detectar e medir variáveis ambientais. <br /> R$ 2.99
          </p>
        </div>
      </div>
    </div>
  );
}



