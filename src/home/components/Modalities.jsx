import { ModalitiesCard } from "./ModalitiesCard";

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
        <ModalitiesCard title={'12 Horas mensuales'} paragraph={'(3 hrs a la semana o sabatino)'} />
        <ModalitiesCard title={'16 Horas mensuales'} paragraph={'(4 hrs a la semana)'} />
        <ModalitiesCard title={'20 Horas mensuales'} paragraph={'(5 hrs a la semana)'} />
      </div>
    </article>
  )
}
