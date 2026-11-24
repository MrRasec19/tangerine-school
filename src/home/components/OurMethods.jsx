import TangerineWindow from '../../assets/ventana-tangerine.png';
import iconTangerine from '../../assets/hero/tangerine-sello.svg';
import waveTopPink from '../../assets/waves/wave-top-pink.svg';
import waveBottomYellow from '../../assets/waves/wave-bottom-yellow.svg';

export const OurMethods = () => {
	return (
		<>
			<article
				className="bg-blue-strong px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-[194px] relative"
				id="our-method"
			>
				{/* Wave Top */}
				<div className="wave-divider absolute left-0 w-full top-0 z-10">
					<img src={waveTopPink} className="wave-divider" alt="Wave Top" />
				</div>

				<div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center gap-12 py-24 md:py-32 relative">
					{/* Tangerine Sello */}
					<div className="absolute -top-24 right-0 z-10 h-48 w-48">
						<img src={iconTangerine} alt="Tangerine Sello" />
					</div>

					{/* Sección de Imagen */}
					<div className="w-full md:w-1/2 flex justify-center md:justify-end">
						<img
							className="w-3/4 sm:w-2/3 md:w-full h-auto object-contain"
							src={TangerineWindow}
							alt="Ventana Tangerine"
						/>
						{/* <img
							className="w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
							src={TangerineWindow}
							alt="Ventana Tangerine"
						/> */}
					</div>

					{/* Sección de Texto */}
					<div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-2">
						<h3
							id="title"
							className="text-orange font-bold mb-4 sm:mb-6 md:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-balance"
						>
							Nuestro método
						</h3>
						<p
							id="paragraph"
							className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed mb-8 text-pretty tracking-wide"
						>
							Nuestro método es muy “Hands on” pero al mismo tiempo integral.
						</p>
						<p
							id="paragraph"
							className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-pretty tracking-wide"
						>
							Aunque enfocamos nuestra atención particularmente hacia lo conversacional también
							trabajamos con herramientas de evaluación de lectura, escritura, listening y
							gramática.
						</p>
					</div>
				</div>

				{/* Wave Bottom */}
				<div className="wave-divider absolute -bottom-1 left-0 w-full z-10">
					<img src={waveBottomYellow} alt="Wave bottom" />
				</div>
			</article>
		</>
	);
};
