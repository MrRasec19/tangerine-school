import PropTypes from 'prop-types';
import { WhyStudyWindowCards } from './WhyStudyWindowCards';
import { useState } from 'react';

export default function WhyStudyCards({ imgSrc, title, text }) {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div 
        className='h-full sm:h-auto w-auto cursor-pointer hover:scale-105 transition-transform duration-300'
        onClick={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
      >
        <div className={`w-full h-full cat-card transition-opacity duration-300 ${isClicked ? 'opacity-0' : 'opacity-100'}`}>
          <img src={ imgSrc } alt="Imagen" className='w-full rounded-t-xl cat-card-img' />
          <div className="w-full bg-orange flex justify-center items-center rounded-b-xl cat-card-contain">
            <span className="text-blue-strong text-5xl font-bold text-center cat-card-text">{ title }</span>
          </div>
        </div>
        <div className={`w-full h-full absolute top-0 left-0 scale-125 z-10 transition-opacity duration-300 ${isClicked ? 'opacity-100' : 'opacity-0'}`}>
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
