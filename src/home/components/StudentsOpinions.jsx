import { OpinionsSlider } from "./OpinionsSlider";
import WaveBlue from "../../assets/waves/wave-blue-strong.svg?react";

export const StudentsOpinions = () => {
  return (
    <>
      <article
        className="bg-white py-20 sm:py-32 md:py-40 flex items-center justify-center flex-col"
        id="students-opinions"
      >
        <div className="grid grid-cols-1 sm:grid-cols-12 w-full max-w-6xl px-4 sm:px-6 mb-12 sm:mb-16">
          <div className="sm:col-start-2 sm:col-end-12 text-center sm:text-left">
            <h3
              id="title"
              className="text-orange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              ¿Qué opinan nuestros alumnxs?
            </h3>
          </div>
        </div>
        <OpinionsSlider />
      </article>
      <WaveBlue className="waveBlue w-full" />
    </>
  );
};
