
import WhiteShine from "../../assets/brillito-blanco-tangerine.svg?react";

export const OurCompromise = () => {
  return (
    <article className='bg-yellow px-10 py-40 flex items-center justify-center' id='our-compromises'>
      <div className="grid grid-cols-12">
        <div className="col-start-11 col-end-12">
            <WhiteShine id="white-shine" className="w-14 h-14 text-white"/>
        </div>
        <div className="col-start-4 col-end-9">
            <h3 id="title" className="text-orange text-4xl w-full font-bold">
                Nuestro Compromiso
            </h3>
        </div>
        <div className="col-start-4 col-end-11 py-10">
            <p id="paragraph" className="w-full text-blue-strong text-4xl font-bold text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima ut voluptatibus cumque atque vel rem exercitationem veniam dolorem libero minus facilis perspiciatis, dicta officia eveniet nulla culpa eius Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, excepturi fugiat repellendus aliquid
            </p>
        </div>
        <div className="col-start-5 col-end-9">
            <button id="btn" className="w-full bg-orange text-blue-strong font-bold rounded-full text-2xl p-4">
                Inscríbete ahora y obtén un descuento especial
            </button>
        </div>
      </div>
    </article>
  )
}
