import PropTypes from 'prop-types';

export const OpinionCard = ({ comment, name, from }) => {
	return (
		<div className="relative bg-rose-thiny rounded-3xl rounded-bl-none px-4 sm:px-6 md:px-8 pt-5 sm:pt-6 pb-4 sm:pb-6 flex flex-col justify-between h-full min-h-[180px] sm:min-h-[200px] md:min-h-[250px] w-[240px] min-[375px]:w-[280px] sm:w-[420px] md:w-[520px]">
			<div>
				<h6
					id="opinion-text"
					className="text-orange font-bold text-sm sm:text-base md:text-lg leading-snug break-words"
				>
					{comment}
				</h6>
			</div>
			<div className="mt-4 flex flex-col sm:gap-2">
				<span className="text-orange font-bold text-xl sm:text-2xl md:text-3xl break-words">
					{name}
				</span>
				<span className="text-orange font-bold text-base sm:text-lg md:text-xl break-words">
					{from}
				</span>
			</div>
			<div className="bubble-tail-left-opinions" />
		</div>
	);
};

OpinionCard.propTypes = {
	comment: PropTypes.string,
	name: PropTypes.string,
	from: PropTypes.string,
};
