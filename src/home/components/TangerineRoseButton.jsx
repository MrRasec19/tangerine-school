import PropTypes from 'prop-types';

export const TangerineRoseButton = ({ text }) => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+526621998313&text=Hola Mundo"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto mt-5"
    >
      <button
        className="bg-orange-thiny text-orange font-black py-3 px-6 rounded-full text-lg sm:text-base md:text-lg lg:text-4xl lg:py-6 w-full"
      >
        {text}
      </button>
    </a>
  );
};

TangerineRoseButton.propTypes = {
  text: PropTypes.string.isRequired,
};
