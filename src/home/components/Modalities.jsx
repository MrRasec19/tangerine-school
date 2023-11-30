import Note from "../../assets/nota-tangerine.svg?react";

export const Modalities = () => {
  return (
    <article className='bg-rose-thiny px-10 py-40' id='modalities'>
      <div className="grid grid-cols-12">
        <div className="col-start-6 col-end-9">
            <h3 id="title" className="text-orange text-5xl w-full font-bold">
                Modalidades
            </h3>
        </div>
        <div className="col-start-4 col-end-11 mt-3 mb-10">
            <p id="paragraph" className="w-full text-blue-strong text-2xl font-semibold text-left">
            Tenemos tres modalidades diferentes para que elijas la que más te convenga:
            </p>
        </div>
        <div className="col-span-4">
            <Note className="w-3/4 m-auto" />
            <div className="w-1/2 content-text-first-note">
                <h4 className="text-orange font-bold text-5xl w-full text-center mb-2">12 Horas mensuales</h4>
                <p className="text-white font-bold text-2xl w-full text-center">(3 hrs a la semana o sabatino)</p>
            </div>
        </div>
        <div className="col-span-4">
            <Note className="w-3/4 m-auto middle-note" />
            <div className="w-1/2 content-text-second-note">
                <h4 className="text-orange font-bold text-5xl w-full text-center mb-2">16 Horas mensuales</h4>
                <p className="text-white font-bold text-2xl w-full text-center">(4 hrs a la semana)</p>
            </div>
        </div>
        <div className="col-span-4">
            <Note className="w-3/4 m-auto" />
            <div className="w-1/2 content-text-third-note">
                <h4 className="text-orange font-bold text-5xl w-full text-center mb-2">20 Horas mensuales</h4>
                <p className="text-white font-bold text-2xl w-full text-center">(5 hrs a la semana)</p>
            </div>
        </div>
      </div>
    </article>
  )
}
