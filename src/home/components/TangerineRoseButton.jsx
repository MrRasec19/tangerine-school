import PropTypes from 'prop-types';

export const TangerineRoseButton = ({ text }) => {
  return (
    <button className='bg-orange-thiny px-6 py-3 md:px-9 md:py-6 mt-8 md:mt-16 rounded-full text-center'>
      <span className='text-orange font-bold text-xl md:text-2xl lg:text-4xl text-center'>
        <a href="https://api.whatsapp.com/send?phone=+526621998313&text=Hola Mundo" target="_blank" rel="noopener noreferrer">{ text }</a>
      </span>
    </button>
  )
}

TangerineRoseButton.propTypes = {
    text: PropTypes.string,
}
