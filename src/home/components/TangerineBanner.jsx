import { IoIosArrowDown } from "react-icons/io";
import Tangerino from "../../assets/tangerino-grande-tangerine.svg?react";
import { TangerineButton } from './TangerineButton';
import { TangerineRoseButton } from "./TangerineRoseButton";

import '../styles/tangerine-banner.css';

export const TangerineBanner = () => {

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <article className='pb-14 pt-48 px-4 sm:px-8 text-center bg-rose-thiny flex flex-col items-center relative overflow-hidden' id='home-section'>

        <div className="w-full max-w-3xl flex flex-col items-center mb-3"  >
          <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold font-neuwelt text-orange leading-tight' >Inglés en línea</h1>
          <h2 className='xl:w-full lg:w-full md:w-10/12 sm:w-10/12 btn-blue text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-strong leading-tight' >Clases 100% en vivo</h2>
        </div>

        <div  className="w-full max-w-4xl flex flex-col items-center">
          <TangerineButton />
          <TangerineRoseButton text="Contáctanos" />
          <h3 className='text-orange font-bold text-xl sm:text-2xl mt-2'>
          <a onClick={(e) => handleScroll(e, 'why-with-us')} href="#why-with-us" className="flex flex-col items-center font-black text-2xl sm:text-3xl transition-all duration-300 ease-in-out transform hover:scale-105">
            Quiero saber más
            <IoIosArrowDown className='mt-1 animate-bounce text-orange text-2xl sm:text-3xl stroke-[20px]' />
          </a>
        </h3>
        </div>

        

        <Tangerino 
          className="
            absolute bottom-0 
            -left-10 sm:-left-16 md:-left-20 lg:-left-24 xl:-left-32 
            w-36 sm:w-48 md:w-64 lg:w-80 xl:w-[28rem]
            h-auto pointer-events-none select-none
          " 
          
        />
      </article>
    </>
  );
};
