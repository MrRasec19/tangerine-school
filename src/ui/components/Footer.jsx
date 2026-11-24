import '../styles/footer.css';
import IconTangerine from '../../assets/icono-tangerine.svg?react';
import { ContactInfo } from './ContactInfo';
import { ScheduleInfo } from './ScheduleInfo';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full bg-white relative px-6 sm:px-10 pt-24 pb-8">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 gap-12 relative">
				<div className="absolute -top-48 right-0 z-10 h-48 w-48">
					<IconTangerine className="w-full h-full" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
					<ContactInfo />
					<ScheduleInfo />
				</div>
				<div className="w-full flex flex-col sm:flex-row justify-center items-center sm:justify-around text-center gap-2 sm:gap-0">
					{/* <h4 className="text-orange font-bold text-base sm:text-lg md:text-xl">
						Aviso de privacidad
					</h4>
					<h4 className="text-orange font-bold text-base sm:text-lg md:text-xl">
						Condiciones de servicio
					</h4> */}
					<h4 className="text-orange font-bold text-base sm:text-lg md:text-xl">
						Tangerine School &reg; {currentYear}
					</h4>
				</div>
			</div>
		</footer>
	);
};
