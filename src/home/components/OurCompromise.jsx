import { DecorativeSvg } from './DecorativeSVG.jsx';
import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";
import { WHATSAPP_URL } from '../../data/whatsapp';

export const OurCompromise = () => {
  return (
    <>
      <article
        className="bg-yellow px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-[194px]"
        id="our-compromises"
      >

        <div className="max-w-5xl w-full mx-auto flex flex-col gap-y-16 relative">

          
          {/* White Shine Icon */}
          <DecorativeSvg className="absolute -top-40 right-0 z-10 inline-flex shrink-0 pointer-events-none w-40">
            <WhiteShine className="w-full h-full text-white" />
          </DecorativeSvg>

          {/* Título */}
          <div className="text-center sm:text-left">
            <h3
              id="title"
              className="text-orange font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-balance"
            >
              Nuestro compromiso
            </h3>
          </div>

          {/* Párrafo */}
          <div className="px-2 sm:px-0">
            <p
              id="paragraph"
              className="text-blue-strong font-semibold text-base sm:text-lg md:text-3xl leading-relaxed text-left tracking-wide mb-8"
            >
              En Tangerine School nos comprometemos a acompañarte en tu proceso de aprendizaje con clases semi personalizadas y un plan de estudios flexible.
            </p>

            <p
              id="paragraph"
              className="text-blue-strong font-semibold text-base sm:text-lg md:text-3xl leading-relaxed text-left tracking-wide"
            >
              Trabajamos desde la empatía hacia nuestros estudiantes y el cariño a nuestra profesión, siempre buscando maneras creativas para lograr casos de éxito y superación personal y profesional.
            </p>
          </div>

          {/* Botón con animación */}          
          <div className="flex justify-center px-4 sm:px-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-auto
                bg-orange text-blue-strong hover:bg-orange/90 focus:ring-orange/50
                font-black tracking-wide text-base lg:text-2xl xl:text-[1.75rem]
                py-3 px-4 sm:px-10 lg:py-7 rounded-full 
                transition-all duration-300 ease-in-out transform 
                hover:scale-105  active:scale-95 focus:outline-none focus:ring-4`}
            >
              Inscríbete ahora y obtén un descuento especial
            </a>
          </div>

        </div>

      </article>
    </>
  );
};
