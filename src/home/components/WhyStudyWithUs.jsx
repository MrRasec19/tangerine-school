import WhyStudyCards from './WhyStudyCards'
import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";

export const WhyStudyWithUs = () => {
  return (
    <article className='bg-orange-thiny px-10 py-40' id='why-with-us'>
      <div className="grid grid-cols-12 grid-rows-6 mb-28">
        <div className="col-start-11 col-end-12 row-start-1">
            <WhiteShine id="white-shine" className="w-14 h-14 text-white"/>
        </div>
        <div className="col-start-4 col-end-10 row-start-1">
            <h3 id="title" className="text-orange text-6xl w-full font-bold">
              ¿Por qué estudiar con nosotros?
            </h3>
        </div>
        <div className="col-span-3 row-start-2 row-end-5">
          <WhyStudyCards imgSrc={"https://cdn.unotv.com/images/2023/09/gatitos-munchkin-jpg-140420-1024x576.jpg"} text={"Curriculum flexible"} />
        </div>
        <div className="col-span-3 row-start-2 row-end-5">
          <WhyStudyCards imgSrc={"https://cdn.unotv.com/images/2023/09/gatitos-munchkin-jpg-140420-1024x576.jpg"} text={"Maestros capacitados"} />
        </div>
        <div className="col-span-3 row-start-2 row-end-5">
          <WhyStudyCards imgSrc={"https://cdn.unotv.com/images/2023/09/gatitos-munchkin-jpg-140420-1024x576.jpg"} text={"Grupos reducidos"} />
        </div>
        <div className="col-span-3 row-start-2 row-end-5">
          <WhyStudyCards imgSrc={"https://cdn.unotv.com/images/2023/09/gatitos-munchkin-jpg-140420-1024x576.jpg"} text={"Método conversacional"} />
        </div>
      </div>
    </article>
  )
}
