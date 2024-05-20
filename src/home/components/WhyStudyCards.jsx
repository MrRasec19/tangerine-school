import PropTypes from 'prop-types';
import { WhyStudyWindowCards } from './WhyStudyWindowCards';
import { useState } from 'react';

export default function WhyStudyCards({ imgSrc, title, text }) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div 
        className='w-full max-w-sm h-full max-h-full relative cursor-default'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`w-full h-full cat-card transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <img src={ imgSrc } alt="Imagen" className='w-full rounded-t-xl cat-card-img' />
          <div className="w-full bg-orange flex justify-center items-center rounded-b-xl cat-card-contain">
            <span className="text-blue-strong text-5xl font-bold text-center cat-card-text">{ title }</span>
          </div>
        </div>
        <div className={`w-full h-full absolute top-0 left-0 scale-125 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <WhyStudyWindowCards title={ title } paragraph={ text } />
        </div>
      </div>
    </>
  )
}

WhyStudyCards.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}
