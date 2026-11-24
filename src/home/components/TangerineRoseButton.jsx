import PropTypes from 'prop-types';
import { WHATSAPP_URL } from '../../data/whatsapp';

export const TangerineRoseButton = ({ text }) => {
	const isContact = text === 'Contáctanos';
	return (
		<a
			href={WHATSAPP_URL}
			target="_blank"
			rel="noopener noreferrer"
			className={`
        inline-flex items-center justify-center
        bg-orange-thiny text-orange font-black tracking-wide
        py-3 px-10 lg:py-7 rounded-full 
        transition-all duration-300 ease-in-out transform 
        hover:scale-105 hover:bg-orange-thiny/90 active:scale-95 focus:outline-none
        ${
					isContact
						? 'w-auto text-xl lg:text-2xl xl:text-[1.75rem]'
						: 'text-xs md:text-lg w-auto sm:text-base'
				}
      `}
		>
			{text}
		</a>
	);
};

TangerineRoseButton.propTypes = {
	text: PropTypes.string.isRequired,
};
