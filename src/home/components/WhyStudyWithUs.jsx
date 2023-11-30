import WhyStudyCards from './WhyStudyCards'
import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";

export const WhyStudyWithUs = () => {
  return (
    <article className='w-full bg-orange-thiny px-10 py-40 flex items-center' id='why-with-us'>
      <div className="grid grid-cols-12">
        <div className="col-start-11 col-end-12">
            <WhiteShine id="white-shine" className="w-14 h-14 text-white"/>
        </div>
        <div className="col-start-6 col-end-11">
            <h3 id="title" className="text-orange text-4xl w-full font-bold">
              ¿Por qué estudiar con nosotros?
            </h3>
        </div>
        <div className="col-span-3">
        </div>
        <div className="col-span-3">
        </div>
        <div className="col-span-3">
        </div>
        <div className="col-span-3">
        </div>
      </div>
    </article>
  )
}
