import OrangeShine from '../../assets/brillito-naranja-tangerine.svg?react';
import FacebokIcon from '../../assets/social-media/icon-facebook.svg?react';
import InstagramIcon from '../../assets/social-media/icon-instagram.svg?react';
import YoutubeIcon from '../../assets/social-media/icon-youtube.svg?react';
import TiktokIcon from '../../assets/social-media/icon-tiktok.svg?react';
import { DecorativeSvg } from './DecorativeSVG.jsx';
import waveTopBlue from '../../assets/waves/wave-top-blue.svg';

export const FollowUs = () => {
	return (
		<article
			className="bg-rose-thiny px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 pt-8 sm:pt-10 lg:pt-[194px] pb-16 sm:pb-24 lg:pb-12 flex justify-center items-center flex-col relative"
			id="follow-us"
		>
			{/* Wave Top — única transición FAQ (blue-strong) → bloque social */}
			<div className="wave-divider absolute left-0 w-full top-0 z-10">
				<img src={waveTopBlue} className="wave-divider" alt="Wave Top" />
			</div>

			{/* Contenedor central */}
			<div className="w-full max-w-6xl flex flex-col items-center text-center relative px-2 sm:px-6 pt-0 md:pt-56 pb-6">
				{/* Brillito decorativo arriba a la derecha */}
				<DecorativeSvg className="absolute top-0 right-0 z-10 inline-flex shrink-0 pointer-events-none w-40">
					<OrangeShine className="w-full h-full" />
				</DecorativeSvg>

				{/* Título */}
				<div className="flex flex-col items-center gap-6">
					<h3 className="text-orange font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
						¡Síguenos!
					</h3>
					<p id="paragraph" className="text-orange text-lg md:text-2xl lg:text-3xl font-semibold">
						Nos gusta crear contenido educativo y divertido de acceso público <br className="hidden lg:inline" />
						para que sigas aprendiendo y practicando después de clases.
					</p>
				</div>

				{/* Íconos sociales */}
				<div className="flex flex-wrap justify-center items-center gap-8 mt-10">
					<a
						href="https://www.instagram.com/tangerineschool/?hl=es-la"
						target="_blank"
						rel="noreferrer"
						className="transition-transform hover:scale-110"
					>
						<InstagramIcon className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" />
					</a>
					<a
						href="https://www.facebook.com/Tangerinenglish"
						target="_blank"
						rel="noreferrer"
						className="transition-transform hover:scale-110"
					>
						<FacebokIcon className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" />
					</a>
					<a
						href="https://www.tiktok.com/@tangerineschool?_r=1&_t=ZS-99XXYwuwZSz"
						target="_blank"
						rel="noreferrer"
						className="transition-transform hover:scale-110"
					>
						<TiktokIcon className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" />
					</a>
					<a
						href="https://youtube.com/@tangerineschool?si=hiZxuvhQ5ija7c4E"
						target="_blank"
						rel="noreferrer"
						className="transition-transform hover:scale-110"
					>
						<YoutubeIcon className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" />
					</a>
				</div>
			</div>
		</article>
	);
};
