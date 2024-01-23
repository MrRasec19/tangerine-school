import PropTypes from 'prop-types';
export default function WhyStudyCards({ imgSrc, text }) {
  return (
    <div className='w-full h-full cat-card'>
        <img src={ imgSrc } alt="Imagen" className='w-full rounded-t-xl cat-card-img' />
        <div className="w-full bg-orange flex justify-center items-center rounded-b-xl cat-card-contain">
          <span className="text-blue-strong text-5xl font-bold text-center cat-card-text">{ text }</span>
        </div>
    </div>
  )
}

WhyStudyCards.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string
}
