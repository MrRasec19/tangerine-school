import WhyStudyCards from './WhyStudyCards';
import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";
import WaveBlue from "../../assets/waves/wave-blue-strong.svg?react";
import { studyWhitUs } from '../../data/studyWhitUs.js';

export const WhyStudyWithUs = () => {
  return (
    <>
      <article className='bg-orange-thiny px-12 pb-40' id='why-with-us'>
        <div className="grid grid-cols-12  mb-28">
          <div className="col-start-12 col-span-1 row-start-1 ml-20">
              <WhiteShine id="white-shine" className="w-14 h-14 text-white"/>
          </div>
          <div className="col-start-5 col-span-8 row-start-1 mb-24">
              <h3 id="title" className="text-orange text-6xl w-full font-bold">
                ¿Por qué estudiar con nosotros?
              </h3>
          </div>
          {studyWhitUs.map(item => (
            <div key={item.id} className="col-span-3 row-start-2 mb-20">
              <WhyStudyCards imgSrc={item.image} title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      </article>
      <WaveBlue className="bg-orange-thiny" />
    </>
  )
}