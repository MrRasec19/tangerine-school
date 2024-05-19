import PropTypes from 'prop-types';
import TangerineWindow from "../../assets/ventanita-tangerine.svg?react";

export const WhyStudyWindowCards = ({ title, paragraph }) => {
  return (
    <>
        <div id="tangerine-window">
            <TangerineWindow  />
            <div className='why-study-content-text-card'>
                <h4 className="text-orange font-bold text-5xl w-full text-center mb-11">{ title }</h4>
                <p className="text-blue-strong font-bold text-2xl w-full text-left px-16">{ paragraph }</p>
            </div>
        </div>
    </>
  )
}

WhyStudyWindowCards.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string
}
