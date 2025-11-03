import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";

export const OurCompromise = () => {
  return (
    <>
      <article
        className="bg-yellow px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-32 flex items-center justify-center"
        id="our-compromises"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-8 sm:gap-y-12 w-full max-w-6xl grid-flow-row">
          {/* White Shine Icon */}
          <div className="sm:col-start-11 sm:col-end-12 flex justify-end" >
            <WhiteShine id="white-shine" className="w-10 h-10 sm:w-12 sm:h-12 text-white mr-10" />
          </div>

          {/* Título */}
          <div className="sm:col-start-4 sm:col-end-12 xl:col-start-4 xl:col-end-11 lg:col-start-4 lg:col-end-11 md:col-start-4 md:col-end-11 text-center sm:text-left" >
            <h3
              id="title"
              className="text-orange text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
            >
              Nuestro compromiso
            </h3>
          </div>

          {/* Párrafo */}
          <div className="sm:col-start-2 sm:col-end-12 px-2 sm:px-0" >
            <p
              id="paragraph"
              className="text-blue-strong text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-justify hyphens-auto"
            >
              En Tangerine School nos comprometemos a acompañarte en tu proceso de aprendizaje con clases semi personalizadas y un plan de estudios flexible. Trabajamos desde la empatía hacia nuestros estudiantes y el cariño a nuestra profesión, siempre buscando maneras creativas para lograr casos de éxito y superación personal y profesional.
            </p>
          </div>

          {/* Botón con animación */}
          <div className="lg:col-start-4 lg:col-end-12 md:col-start-4 md:col-end-10 sm:col-start-3 sm:col-end-12 flex justify-center sm:justify-start px-4 sm:px-0" >
            <a 
              href="https://api.whatsapp.com/send?phone=+526621998313&text=Hola Mundo"
              target="_blank"
              rel="noopener noreferrer"
            >
                <button
                id="btn"
                className="flex justify-center items-center w-full sm:w-auto bg-orange text-blue-strong rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-black
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-orange/90 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange/50"
              >
                <p className="mx-7 my-5">
                  Inscríbete ahora y obtén un descuento especial
                </p>
              </button>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};
