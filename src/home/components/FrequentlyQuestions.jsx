import { AccordionQuestions } from "./AccordionQuestions";
import WaveRose from "../../assets/waves/wave-rose.svg?react";

export const FrequentlyQuestions = () => {
  return (
    <>
      <article className='bg-blue-strong px-5 md:px-10 py-20 md:py-40' id='FAQ'>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-6 md:mb-9">
            <h3 id="title" className="text-orange text-3xl md:text-6xl font-bold text-center">
                Frequently asked questions
            </h3>
          </div>
          <div className="w-full md:w-3/5">
            <AccordionQuestions />
          </div>
        </div>
      </article>
      <WaveRose className="waveRoseFrequentlyQuestions" />
    </>
  );
};
