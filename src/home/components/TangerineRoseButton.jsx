import PropTypes from 'prop-types';

export const TangerineRoseButton = ({ text }) => {
  return (
    <button className='bg-orange-thiny px-9 py-6 mt-16 rounded-full text-center'>
        <span className='text-orange font-bold text-4xl text-center'>{ text }</span>
    </button>
  )
}

TangerineRoseButton.propTypes = {
    text: PropTypes.string,
}