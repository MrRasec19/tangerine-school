import PropTypes from 'prop-types';
import { WhyStudyWindowCards } from './WhyStudyWindowCards';

export default function WhyStudyCards({ imgSrc, text }) {
  return (
    <>
      <div className='w-full h-full cat-card'>
        <img src={ imgSrc } alt="Imagen" className='w-full rounded-t-xl cat-card-img' />
        <div className="w-full bg-orange flex justify-center items-center rounded-b-xl cat-card-contain">
          <span className="text-blue-strong text-5xl font-bold text-center cat-card-text">{ text }</span>
        </div>
      </div>
      <WhyStudyWindowCards title={'Maestros capacitados'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, omnis quibusdam earum debitis ab magni perspiciatis adipisci voluptate assumenda velit eaque veniam tempore tempora cumque. Quo repellat animi odio doloribus.'} />
    </>
  )
}

WhyStudyCards.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string
}
