import React from 'react'
import IconTangerine from "../../assets/icono-tangerine.svg?react";

export const TangerineBanner = () => {
  return (
    <div className='w-full py-14 text-center bg-rose-thiny' id='home-section'>
        <h1 className='text-8xl font-bold text-orange'>Inglés en línea</h1>
        <h2 className='text-7xl font-bold text-blue-strong'>Clases 100% en vivo</h2>
        <div className='bg-blue-strong flex w-64 rounded-2xl py-5 px-2'>
          <h4 className='text-orange text-left text-2xl font-bold'>Con enfoque conversacional y humanista</h4>
          <IconTangerine className="w-14 h-14" />
        </div>
    </div>
  )
}
