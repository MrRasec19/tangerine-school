import PropTypes from 'prop-types';

export const WhyStudyWindowCards = ({ title, paragraph }) => {
  return (
    <>
        <div id="tangerine-window">
          <div className="w-full h-full flex flex-col justify-center items-center tangerine-window-container px-4 sm:px-6 md:px-10 py-6 md:py-10">
            
            <h4 className="text-orange font-bold text-base sm:text-lg md:text-xl text-center mb-3">
              {title}
            </h4>
            
            <p className="text-blue-strong font-normal text-xs sm:text-sm md:text-base text-left max-w-2xl mx-auto px-2 sm:px-4">
              {paragraph}
            </p>

          </div>
        </div>



    </>
  )
}

WhyStudyWindowCards.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string
}
