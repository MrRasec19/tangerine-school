import iconTangerine from '../../assets/hero/tangerine-sello.svg';
import '../styles/home.css'; // Asegúrate de importar el CSS

export const TangerineButton = () => {
	return (
		<div className="relative w-full md:w-auto">
			<div className="bg-blue-strong rounded-tl-[48px] rounded-r-[48px] sm:rounded-r-none py-5 sm:py-8 px-6 sm:px-14 flex flex-col items-center gap-4">
				<h4 className="text-orange text-center font-black text-xl lg:text-2xl xl:text-[1.75rem] tracking-wider">
					Un enfoque práctico <span className="block sm:inline">y conversacional</span>
				</h4>

				<div className="absolute -bottom-2 -right-6 sm:-right-10 md:-right-20 z-10 h-28 w-28 hidden sm:block">
					<img src={iconTangerine} />
				</div>
			</div>
			<div className="bubble-tail-left" />
		</div>
	);
};
