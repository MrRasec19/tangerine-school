import WhyStudyCards from './WhyStudyCards.jsx';
import { DecorativeSvg } from './DecorativeSVG.jsx';
import WhiteShine from '../../assets/brillito-blanco-tangerine.svg?react';

export const WhyStudyWhitUs = () => {
	return (
		<article id="why-with-us" className="bg-orange-thiny px-4 py-16 sm:py-20 lg:px-10 lg:py-[194px]">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 gap-12 relative">
				{/* White Shine Icon */}
				<DecorativeSvg className="absolute -top-24 right-0 z-10 inline-flex shrink-0 pointer-events-none w-24 lg:-top-40 lg:w-40">
					<WhiteShine className="w-full h-full text-white" />
				</DecorativeSvg>

				<h2 className="text-orange text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-10 lg:mb-24 text-balance">
					¿Por qué estudiar con nosotros?
				</h2>

				<WhyStudyCards />
			</div>
		</article>
	);
};
