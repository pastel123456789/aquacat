import Ba from '../assets/BATERIA.png';
import ARD from '../assets/ARD.png';
import B from '../assets/BOMBA.png';
import F from '../assets/5.png';
import P from '../assets/proto.png';
import U from '../assets/ULT.png';
import H from '../assets/6.png';
import T from '../assets/temp.png';

export function Materiais() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-blu p-4">
      <h1 className="text-wht text-4xl mb-8 fonr font-lexend font-bold">Materiais</h1>
      <div className="flex flex-col space-y-8 w-full max-w-screen-lg">
        <div className="flex items-center space-x-4">
          <img
            src={ARD}
            alt="Placa Arduino"
            className="w-[250px] h-[250px] object-cover rounded-lg"
          />
          <p className="text-wht text-lg font-lexend font-bold">
          Bomba de Água: Componente que movimenta a água no sistema. <br /> R$ 40.00
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={Ba}
            alt="Bateria"
            className="w-[250px] h-[250px] object-cover rounded-lg"
          />
          <p className="text-wht text-lg font-lexend font-bold">
            Bateria: Fonte de energia para alimentar o circuito. <br /> R$ 39.99
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={B}
            alt="Bomba de água"
            className="w-[250px] h-[250px] object-cover rounded-lg"
          />
          <p className="text-wht text-lg font-lexend font-bold">
          Placa Arduino: Um microcontrolador usado para prototipagem eletrônica. <br /> R$ 90.00
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-12">
          <img
            src={F}
            alt="Fio"
            className="w-[250px] h-[250px] object-cover rounded-lg"
          />
          <p className="text-wht text-lg font-lexend font-bold">
            Fio: Conecta os diferentes componentes do circuito. <br /> R$ 1.99
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={P}
            alt="Protoboard"
            className="w-[250px] h-[250px] object-cover rounded-lg"
          />
          <p className="text-wht text-lg font-lexend font-bold">
            Protoboard: Placa de ensaio para montar circuitos eletrônicos. <br /> R$ 10.00
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={U}
            alt="Sensor"
            className="w-[250px] h-[250px] object-cover rounded-lg"
          />
          <p className="text-wht text-lg mb-8 font-lexend font-bold">
            Sensor: Dispositivo para detectar e medir variáveis ambientais. <br /> R$ 2.99
          </p>
        </div>
        <div className="flex items-center space-x-4">
        <img
            src={H}
            alt="hC05"
            className="w-[250px] h-[250px] object-cover rounded-lg"
          />
          <p className="text-wht text-lg mb-8 font-lexend font-bold">
          Módulo Bluetooth HC-05: Este módulo bluetooth HC-05 oferece uma forma fácil e barata de comunicação com seu projeto <br /> R$ 39.90
          </p>
        </div>
        <div className="flex items-center space-x-4">
        <img
            src={T}
            alt="Sensor temperatura"
            className="w-[250px] h-[250px] object-cover rounded-lg"
          />
          <p className="text-wht text-lg mb-8 font-lexend font-bold">
          Sensor de temperatura DS18B20 - À Prova de Água: Este sensor é indicado para aplicações onde é necessário medir a temperatura a uma longa distância do microcontrolador ou em ambientes úmidos. <br /> R$ 39.90
          </p>
        </div>
      </div>
    </div>
  );
}



