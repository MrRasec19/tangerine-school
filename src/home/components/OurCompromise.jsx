import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";
import WaveRose from "../../assets/waves/wave-rose.svg?react";

export const OurCompromise = () => {
  return (
    <>
      <article
        className="bg-yellow px-10 py-40 flex items-center justify-center"
        id="our-compromises"
      >
        <div className="grid grid-cols-12">
          <div className="col-start-11 col-end-12">
            <WhiteShine id="white-shine" className="w-14 h-14 text-white" />
          </div>
          <div className="col-start-4 col-end-10">
            <h3 id="title" className="text-orange text-6xl w-full font-bold">
              Nuestro compromiso
            </h3>
          </div>
          <div className="col-start-3 col-end-12 py-10">
            <p
              id="paragraph"
              className="w-full text-blue-strong text-4xl font-bold text-left"
            >
              En Tangerine School nos comprometemos a acompañarte en tu proceso de aprendizaje con clases semi personalizadas y un plan de estudios flexible. Trabajamos desde la empatía hacia nuestros estudiantes y el cariño a nuestra profesión, siempre buscando maneras creativas para lograr casos de éxito y superación personal y profesional.
            </p>
          </div>
          <div className="col-start-5 col-end-9">
            <button
              id="btn"
              className="w-full bg-orange text-blue-strong font-bold rounded-full text-2xl p-4"
            >
              Inscríbete ahora y obtén un descuento especial
            </button>
          </div>
        </div>
      </article>
      <WaveRose className="waveRoseOurCompromises" />
    </>
  );
};