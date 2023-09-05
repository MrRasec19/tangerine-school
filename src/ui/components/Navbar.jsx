import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="w-full bg-white space-x-4 flex items-center py-5 px-6 gap-7">

            <div className='bg-slate-300 px-2 py-4 rounded'>
                <h1 className='text-black'>Tangerine School</h1>
            </div>
            
            <NavLink 
                to="/home"
                className={({ isActive, isPending }) =>
                    isPending ? "font-normal" : isActive ? "font-bold" : ""
                }
            >
                Inicio
            </NavLink>
            <NavLink 
                to="/#"
                className={({ isActive, isPending }) =>
                    isPending ? "font-normal" : isActive ? "font-bold" : ""
                }
            >
                Sobre nosotros
            </NavLink>
            <NavLink 
                to="/#"
                className={({ isActive, isPending }) =>
                    isPending ? "font-normal" : isActive ? "font-bold" : ""
                }
            >
                Contacto
            </NavLink>
        </nav>
  )
}
