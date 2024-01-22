import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Tangerino from "../../assets/tangerino-grande-tangerine.svg?react";
import '../styles/home.css'
import { TangerineButton } from './TangerineButton';

export const TangerineBanner = () => {
  return (
    <article className='py-14 text-center bg-rose-thiny flex flex-col items-center justify-end' id='home-section'>
        <h1 className='text-8xl font-bold text-orange'>Inglés en línea</h1>
        <h2 className='text-7xl font-bold text-blue-strong mb-8'>Clases 100% en vivo</h2>
        <TangerineButton />
        <button className='bg-orange-thiny px-9 py-6 mt-16 rounded-full text-center'><span className='text-orange font-bold text-3xl text-center'>Contáctanos</span></button>
        <h3 className='text-orange font-bold text-3xl flex flex-col items-center mt-3'><a href="#">Quiero saber más</a><IoIosArrowDown className='text-orange font-bold text-3xl' /></h3>
        <Tangerino className="tangerino" />
    </article>
  )
}
