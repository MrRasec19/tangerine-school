import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { comments } from '../../data/comments.js';
import { OpinionCard } from './OpinionCard.jsx';
import waveTopLight from '../../assets/waves/wave-top-light.svg';
import waveBottomBlue from '../../assets/waves/wave-bottom-blue.svg';

const EMBLA_OPTIONS = {
	loop: true,
	align: 'start',
	dragFree: true,
	watchDrag: true,
};

const prefersReducedMotion =
	typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const EMBLA_PLUGINS = [
	AutoScroll({
		playOnInit: !prefersReducedMotion,
		speed: 0.6,
		startDelay: 0,
		stopOnMouseEnter: true,
		stopOnInteraction: false,
		stopOnFocusIn: true,
	}),
];

export const StudentsOpinions = () => {
	const [emblaRef] = useEmblaCarousel(EMBLA_OPTIONS, EMBLA_PLUGINS);

	return (
		<article
			id="students-opinions"
			className="bg-orange-thiny w-full px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-[194px] overflow-hidden relative"
		>
			{/* Wave Top */}
			<div className="wave-divider absolute left-0 w-full top-0 z-0">
				<img src={waveTopLight} className="wave-divider" alt="Wave Top" />
			</div>

			<div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 md:pt-60">
				<div className="flex justify-center px-4">
					<p className="text-orange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-14 leading-tight">
						¿Qué opinan nuestros alumnxs?
					</p>
				</div>
			</div>

			<div className="-mx-4 sm:-mx-6 md:-mx-10 overflow-hidden pb-24 md:pb-60" ref={emblaRef}>
				<div className="flex items-stretch">
					{comments.map((comment) => (
						<div key={comment.id} className="flex-[0_0_auto] shrink-0 pl-6 min-[375px]:pl-12 pr-3 sm:pr-4">
							<OpinionCard comment={comment.comment} name={comment.name} from={comment.from} />
						</div>
					))}
				</div>
			</div>

			{/* Wave Bottom */}
			<div className="wave-divider absolute -bottom-1 left-0 w-full z-10">
				<img src={waveBottomBlue} alt="Wave bottom" />
			</div>
		</article>
	);
};
