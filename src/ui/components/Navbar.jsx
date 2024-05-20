import Logo from "../../assets/LOGO-tangerine.svg?react";
import WhatsappLogo from "../../assets/whatsapp-tangerine.svg?react";
// import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const handleScroll = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <nav className="w-full space-x-4 flex items-center justify-between py-6 px-20 navigation-bar bg-rose-thiny fixed z-10">

        <div className='w-100 h-14 scale-150'>
            {/* <h1 className='text-black'>Tangerine School</h1> */}
            <Logo className="w-40 h-100"/>
        </div>
        
        <a href="#our-method" onClick={(e) => handleScroll(e, 'our-method')} className='text-2xl font-bold text-blue-strong'>Método</a>
        <a href="#why-with-us" onClick={(e) => handleScroll(e, 'why-with-us')} className='text-2xl font-bold text-blue-strong'>Contacto</a>
        <a href="#modalities" onClick={(e) => handleScroll(e, 'modalities')} className='text-2xl font-bold text-blue-strong'>Modalidades</a>
        <a href="#FAQ" onClick={(e) => handleScroll(e, 'FAQ')} className='text-2xl font-bold text-blue-strong'>FAQ</a>
        <a href="https://api.whatsapp.com/send?phone=+526621998313&text=Hola Mundo" target="_blank" rel="noopener noreferrer" className="text-orange">
            <WhatsappLogo className="w-20 h-100 text-orange" />
        </a>

        
        {/* <div className='space-x-5 text-2xl'>
            <NavLink 
                to="#home-section"
                className={({ isActive, isPending }) =>
                    isPending ? "font-normal" : isActive ? "font-bold text-orange-400" : ""
                }
            >
                Inicio
            </NavLink>
            <NavLink 
                to="/about-us"
                className={({ isActive, isPending }) =>
                    isPending ? "font-normal" : isActive ? "font-bold text-orange-400" : ""
                }
            >
                Sobre nosotros
            </NavLink>
            <NavLink 
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "font-normal" : isActive ? "font-bold text-orange-400" : ""
                }
            >
                Contacto
            </NavLink>
        </div> */}
    </nav>
  )
}
