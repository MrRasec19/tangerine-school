import PropTypes from 'prop-types';
import { WhyStudyWindowCards } from './WhyStudyWindowCards';
import { useState } from 'react';

export default function WhyStudyCards({ imgSrc, text }) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div 
        className='w-full h-full relative cursor-default'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`w-full h-full cat-card transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <img src={ imgSrc } alt="Imagen" className='w-full rounded-t-xl cat-card-img' />
          <div className="w-full bg-orange flex justify-center items-center rounded-b-xl cat-card-contain">
            <span className="text-blue-strong text-5xl font-bold text-center cat-card-text">{ text }</span>
          </div>
        </div>
        <div className={`w-full h-full absolute top-0 left-0 scale-110 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <WhyStudyWindowCards title={'Maestros capacitados'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, omnis quibusdam earum debitis ab magni perspiciatis adipisci voluptate assumenda velit eaque veniam tempore tempora cumque. Quo repellat animi odio doloribus.'} />
        </div>
      </div>
    </>
  )
}

WhyStudyCards.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string
}
