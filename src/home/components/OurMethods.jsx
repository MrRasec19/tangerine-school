import TangerineWindow from '../../assets/ventana-tangerine.png';
import WaveYellow from "../../assets/waves/wave-yellow.svg?react";

export const OurMethods = () => {
  return (
    <>
      <article
        className="bg-blue-strong px-5 md:px-10 py-20 md:py-40 flex flex-col md:flex-row items-center justify-center rounded-br-lg"
        id="our-method"
      >
        <div className="md:w-1/2">
          <img className='w-full md:ml-auto md:mr-0' src={TangerineWindow} alt="Ventana Tangerine" />
        </div>
        <div className="md:w-1/2 md:pl-10 flex flex-col justify-center">
          <h3
            id="title"
            className="text-orange text-3xl md:text-6xl font-bold mb-8 md:mb-20"
          >
            Nuestro método
          </h3>
          <p id="paragraph" className="w-full text-white text-lg md:text-3xl text-left mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            minima ut voluptatibus cumque atque vel rem exercitationem veniam
            dolorem libero minus facilis perspiciatis, dicta officia eveniet.
          </p>
          <p id="paragraph" className="w-full text-white text-lg md:text-3xl text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            minima ut voluptatibus cumque atque vel rem exercitationem veniam
            dolorem libero minus facilis perspiciatis, dicta officia eveniet.
          </p>
        </div>
      </article>
      <WaveYellow className="bg-blue-strong" />
    </>
  );
};
