import { useState } from 'react';
import LogoTangerine from '../../assets/hero/logo_tangerine_2025.png';
import WhatsappLogo from '../../assets/whatsapp-tangerine.svg?react';
import { WHATSAPP_URL } from '../../data/whatsapp';
import '../styles/navbar.css';
import { IoMenu, IoClose } from 'react-icons/io5';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScroll = (event, sectionId) => {
		event.preventDefault();
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
			handleCloseMenu();
		}
	};

	const handleOpenMenu = () => {
		const menu = document.getElementById('sm-nav');
		menu.style.right = '0';
		setIsMenuOpen(true);
	};

	const handleCloseMenu = () => {
		const menu = document.getElementById('sm-nav');
		menu.style.right = '-100%';
		setIsMenuOpen(false);
	};

	return (
		<>
			<nav className="w-full space-x-4 flex items-center justify-between py-6 px-4 min-[831px]:px-20 navigation-bar bg-rose-thiny fixed z-20">
				<div className="w-100 h-14 min-[831px]:scale-150 md:pr-5">
					<a href="#home-section" onClick={(e) => handleScroll(e, 'home-section')}>
						<img
							src={LogoTangerine}
							className="w-40 h-100 transition-all duration-300 ease-in-out transform hover:scale-105"
							alt="Logo Tangerine"
						/>
					</a>
				</div>

				<a
					href="#our-method"
					onClick={(e) => handleScroll(e, 'our-method')}
					className="lg-link text-2xl font-bold text-blue-strong transition-all duration-300 ease-in-out transform hover:scale-105"
				>
					Método
				</a>

				<a
					href="#contact"
					onClick={(e) => handleScroll(e, 'contact')}
					className="lg-link text-2xl font-bold text-blue-strong transition-all duration-300 ease-in-out transform hover:scale-105"
				>
					Contacto
				</a>

				<a
					href="#modalities"
					onClick={(e) => handleScroll(e, 'modalities')}
					className="lg-link text-2xl font-bold text-blue-strong transition-all duration-300 ease-in-out transform hover:scale-105"
				>
					Modalidades
				</a>

				<a
					href="#FAQ"
					onClick={(e) => handleScroll(e, 'FAQ')}
					className="lg-link text-2xl font-bold text-blue-strong transition-all duration-300 ease-in-out transform hover:scale-105"
				>
					FAQ
				</a>

				<a
					href={WHATSAPP_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="lg-link text-orange"
				>
					<WhatsappLogo className="w-20 h-100 text-orange whatsapp-logo transition-all duration-300 ease-in-out transform hover:scale-105" />
				</a>

				<button
					type="button"
					onClick={handleOpenMenu}
					aria-label="Abrir menú"
					aria-expanded={isMenuOpen}
					aria-controls="sm-nav"
					className="menuBtn mr-2 inline-flex h-11 w-11 items-center justify-center text-blue-strong min-[831px]:mr-8 min-[831px]:hidden"
				>
					<IoMenu className="h-7 w-7 text-blue-strong" />
				</button>
			</nav>

			<nav id="sm-nav">
				<div className="menu-header-sm h-9 mb-3">
					<button
						type="button"
						onClick={handleCloseMenu}
						aria-label="Cerrar menú"
						className="inline-flex h-11 w-11 items-center justify-center text-blue-strong transition-colors duration-300 active:text-orange"
					>
						<IoClose className="h-7 w-7 text-blue-strong" />
					</button>
				</div>
				<div className="menu-content-sm">
					<div className="p-5 w-full text-center text-2xl font-bold text-blue-strong border-orange border-3">
						<a className="" href="#our-method" onClick={(e) => handleScroll(e, 'our-method')}>
							Método
						</a>
					</div>
					<div className="p-5 text-center text-2xl font-bold text-blue-strong">
						<a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
							Contacto
						</a>
					</div>
					<div className="p-5 text-center text-2xl font-bold text-blue-strong">
						<a href="#modalities" onClick={(e) => handleScroll(e, 'modalities')}>
							Modalidades
						</a>
					</div>
					<div className="p-5 text-center text-2xl font-bold text-blue-strong">
						<a href="#FAQ" onClick={(e) => handleScroll(e, 'FAQ')}>
							FAQ
						</a>
					</div>
					<div className="p-5 text-center flex justify-center items-center">
						<a
							href={WHATSAPP_URL}
							className="text-orange"
							target="_blank"
							rel="noopener noreferrer"
							onClick={handleCloseMenu}
						>
							<WhatsappLogo className="w-20 h-100 text-orange whatsapp-logo" />
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};
