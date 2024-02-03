import { OpinionsSlider } from "./OpinionsSlider"

export const StudentsOpinions = () => {
  return (
    <article className='bg-white px-10 py-40 flex items-center justify-center flex-col' id='students-opinions'>
      <div className="grid grid-cols-12 mb-16">
        <div className="col-start-3 col-end-11">
            <h3 id="title" className="text-orange text-6xl w-full font-bold">
                ¿Qué opinan nuestros alumnxs?
            </h3>
        </div>
      </div>
      <OpinionsSlider />
    </article>
  )
}
