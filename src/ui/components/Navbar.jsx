import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="w-full bg-white space-x-4 flex items-center py-7 px-6 gap-7">

            <div className='bg-slate-300 px-2 py-4 rounded'>
                <h1 className='text-black'>Tangerine School</h1>
            </div>
            
            <div className='space-x-5 text-2xl'>
                <NavLink 
                    to="/home"
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
