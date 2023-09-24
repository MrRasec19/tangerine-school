import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="w-full bg-white space-x-4 flex items-center justify-center py-9 px-16 gap-7">

            <div className='w-14 h-14 scale-150'>
                {/* <h1 className='text-black'>Tangerine School</h1> */}
                <img className='w-full rounded-full' src="data:image/png;base64,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" alt="Tangerine logo" />
            </div>
            
            <div className='space-x-5 text-2xl'>
                <NavLink 
                    to="/"
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
            </div>
        </nav>
  )
}
