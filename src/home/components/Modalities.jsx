import Note from '../../assets/nota-tangerine.png';
import Note2 from '../../assets/nota-tangerine2.png';
import Note3 from '../../assets/nota-tangerine3.png';
import waveTopYellow from '../../assets/waves/wave-top-yellow.svg';
import Tangerino from "../../assets/tangerino-chico-tangerine.svg?react";

export const Modalities = () => {
  return (
    <>
      <article className="bg-rose-thiny px-4 sm:px-8 md:px-16 md:py-[194px] relative" id="modalities">


        <Tangerino 
          className="
            absolute -top-20 right-10 z-10
            w-36 sm:w-48 md:w-64 lg:w-80
            h-auto pointer-events-none select-none
          " 
        />

        {/* Wave Top */}
        <div className="wave-divider absolute left-0 w-full top-0 z-0">
          <img src={waveTopYellow} className="wave-divider" alt="Wave Top" />
        </div>


        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center gap-12 py-24 md:py-32 relative">
          <div className="w-full flex flex-col items-center gap-6 text-center">
            <h3 id="title" className="text-orange font-bold text-4xl md:text-5xl lg:text-6xl">
              Modalidades
            </h3>
            <p
              id="paragraph"
              className="text-blue-strong text-lg md:text-xl lg:text-2xl font-semibold"
            >
              Tenemos tres modalidades diferentes para que elijas la que más te convenga:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            <div className="w-full flex flex-col items-center justify-center">
              <img className="card-spin" src={Note} alt="" />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <img className="card-spin" src={Note2} alt="" />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <img className="card-spin" src={Note3} alt="" />
            </div>
          </div>
        </div>

      </article>

    </>
  );
};
