import WhyStudyCards from './WhyStudyCards'
import WhiteShine from '../../assets/brillito-blanco-tangerine.svg?react'
import WaveBlue from '../../assets/waves/wave-blue-strong.svg?react'
import { studyWhitUs } from '../../data/studyWhitUs.js'

export const WhyStudyWithUs = () => {
  return (
    <>
      <article className="bg-orange-thiny grid grid-cols-1 gap-y-64 md:grid-cols-5 grid-rows-2 sm:grid-cols-1 sm:gap-y-0" id="why-with-us">

          {/* <div className="relative md:col-span-12 flex flex-col items-center md:items-start text-center md:text-left">

           
            <div className="hidden md:block absolute right-10 -top-4 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
              <WhiteShine className="w-full h-full text-white" />
            </div>

            
            <h3
              id="title"
              className="text-orange font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug"
            >
              ¿Por qué estudiar con nosotros?
            </h3>
          </div> */}

          {/* Cards */}
          {studyWhitUs.map((item) => (
            <div key={item.id} className="col-span-1">
              <WhyStudyCards
                imgSrc="https://media.istockphoto.com/id/1443562748/es/foto/lindo-gato-de-jengibre.jpg?s=612x612&w=0&k=20&c=JVC5Z3LxpaTQaXu_fMZjIb73r39z6b0SnAxvNI8iZG0="
                title={item.title}
                text={item.text}
              />
            </div>
        ))}
      </article>

      <WaveBlue className='bg-orange-thiny' />
    </>
  )
}
