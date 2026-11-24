import ChevronDownIcon from '../../assets/faqs/custom-chevron-icon.svg?react';
import Tangerino from '../../assets/tangerino-grande-tangerine.svg?react';
import '../styles/home.css';
import { TangerineButton } from './TangerineButton';
import { TangerineRoseButton } from './TangerineRoseButton';
import waveBottomPink from '../../assets/waves/wave-bottom-pink.svg';

export const TangerineBanner = () => {
	const handleScroll = (event, sectionId) => {
		event.preventDefault();
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<article
				className="pb-16 pt-28 px-4 sm:px-8 lg:pb-[194px] lg:pt-48 text-center bg-rose-thiny relative"
				id="home-section"
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center pb-20">
					<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-orange leading-tight">
						Inglés en línea
					</h1>
					<h2 className="max-[374px]:w-full max-[374px]:text-2xl text-3xl sm:text-4xl md:text-6xl lg:text-[4.25rem] font-bold text-blue-strong mb-6 leading-tight">
						Clases 100% en vivo
					</h2>

					<div className="w-full max-w-3xl flex flex-col items-center gap-14">
						<TangerineButton />
						<TangerineRoseButton text="Contáctanos" />
					</div>

					<h3 className="text-orange font-bold text-xl lg:text-2xl xl:text-[1.75rem] mt-6">
						<a
							onClick={(e) => handleScroll(e, 'why-with-us')}
							href="#why-with-us"
							className="flex flex-col items-center font-black transition-all duration-300 ease-in-out transform hover:scale-105 tracking-wide"
						>
							Quiero saber más
							<span
								className="h-6 w-6 shrink-0 mt-1 text-orange
                  transition-transform duration-300 ease-in-out animate-bounce"
							>
								<ChevronDownIcon className="h-full w-full" />
							</span>
						</a>
					</h3>

					<div className="wave-divider absolute -bottom-1 left-0 w-full z-10">
						<img src={waveBottomPink} alt="Wave bottom" />
					</div>
				</div>
				<Tangerino
					aria-hidden="true"
					className="
          hero-tangerino absolute max-lg:z-[15] lg:z-10 h-auto pointer-events-none select-none
          -bottom-[50px] -left-12 w-40
          sm:-left-12 sm:w-48
          md:-left-16 md:w-64
          lg:bottom-[-100px] lg:-left-24 lg:w-80
          xl:bottom-[-130px] xl:-left-32 xl:w-[28rem]
        "
				/>
			</article>

			{/* <Tangerino
				aria-hidden="true"
				className="
          hero-tangerino absolute max-lg:z-[15] lg:z-10 h-auto pointer-events-none select-none
          bottom-[150px] -left-8 w-40
          sm:-left-12 sm:w-48
          md:-left-16 md:w-56
          lg:bottom-[-176px] lg:-left-24 lg:w-80
          xl:-left-32 xl:w-[28rem]
        "
			/> */}
		</>
	);
};
