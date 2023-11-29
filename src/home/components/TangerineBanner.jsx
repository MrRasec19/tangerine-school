import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import IconTangerine from "../../assets/icono-tangerine.svg?react";
import '../styles/home.css'

export const TangerineBanner = () => {
  return (
    <article className='w-full py-14 text-center bg-rose-thiny flex flex-col items-center justify-end' id='home-section'>
        <h1 className='text-8xl font-bold text-orange'>Inglés en línea</h1>
        <h2 className='text-7xl font-bold text-blue-strong mb-8'>Clases 100% en vivo</h2>
        <div className='bg-blue-strong flex items-center w-fit rounded-3xl py-3 px-5 justify-start'>
          <h4 className='text-orange text-left text-2xl font-bold mr-10'>Con enfoque conversacional y humanista</h4>
          <IconTangerine className="w-14 h-14 iconTangerine"/>
        </div>
        <button className='bg-orange-thiny px-9 py-6 mt-16 rounded-full text-center'><span className='text-orange font-bold text-3xl text-center'>Contáctanos</span></button>
        <h3 className='text-orange font-bold text-3xl flex flex-col items-center mt-3'>Quiero saber más<IoIosArrowDown className='text-orange font-bold text-3xl' /></h3>
    </article>
  )
}
