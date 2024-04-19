import { AccordionQuestions } from "./AccordionQuestions"
import WaveRose from "../../assets/waves/wave-rose.svg?react";



export const FrequentlyQuestions = () => {
  return (
    <>
      <article className='bg-blue-strong px-10 py-40' id='modalities'>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-9">
            <h3 id="title" className="text-orange text-6xl font-bold">
                Frequently asked questions
            </h3>
          </div>
          <div className="w-3/5">
            <AccordionQuestions className="w-full" />
          </div>
        </div>
      </article>
      <WaveRose className="waveRoseFrequentlyQuestions" />
    </>
  )
}
