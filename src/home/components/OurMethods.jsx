import TangerineWindow from '../../assets/ventana-tangerine.png'
import WaveYellow from "../../assets/waves/wave-yellow.svg?react";

export const OurMethods = () => {
  return (
    <>
      <article
        className="bg-blue-strong px-10 py-40 flex items-center justify-center rounded-br-lg"
        id="our-method"
      >
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-5 text-white">
            <img className='w-full' src={TangerineWindow} alt="Ventana Tangerine" />
          </div>
          <div className="col-start-8 col-span-5 justify-center flex flex-col">
            <h3
              id="title"
              className="text-orange text-6xl w-full font-bold mb-20"
            >
              Nuestro método
            </h3>
            <p id="paragraph" className="w-full text-white text-3xl text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              minima ut voluptatibus cumque atque vel rem exercitationem veniam
              dolorem libero minus facilis perspiciatis, dicta officia eveniet.
            </p>
            <p id="paragraph" className="w-full text-white text-3xl text-left mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              minima ut voluptatibus cumque atque vel rem exercitationem veniam
              dolorem libero minus facilis perspiciatis, dicta officia eveniet.
            </p>
          </div>
        </div>
      </article>
      <WaveYellow className="bg-blue-strong" />
    </>
  );
};
