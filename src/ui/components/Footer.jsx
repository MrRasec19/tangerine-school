import React from 'react'
import '../styles/footer.css'
import IconTangerine from "../../assets/icono-tangerine.svg?react";

export const Footer = () => {
  return (
    <footer className='w-full bg-white absolute bottom-auto '>
      <IconTangerine className="w-14 h-14 iconTangerineFooter"/>
      <div className='grid grid-cols-2 grid-rows-2 pt-20'>
        <div className='text-left py-3 flex flex-col items-center'>
          <h3 className='text-orange-thiny font-bold text-6xl w-6/12'>Contacto</h3>
          <div className="w-1/2 text-left text-3xl mt-3">
            <p className='text-orange-thiny'>
              tangerinenglish@gmail.com
            </p>
            <p className='text-orange-thiny'>
              WhatsApp: 662 199 8313
            </p>
          </div>
        </div>
        <div className='text-left py-3 flex flex-col items-baseline'>
          <h3 className='text-orange-thiny font-bold text-6xl w-full'>Horario de atención</h3>
          <div className="w-3/4 text-left text-3xl mt-3">
            <p className='text-orange-thiny'>
              Lun-Vie 9:00AM-10:00PM (hora CDMX)
            </p>
            <p className='text-orange-thiny'>
              Sab 10:00AM-9:00PM (hora CDMX)
            </p>
          </div>
        </div>
        <div className='w-full flex justify-around col-span-2 items-end pb-7'>
          <h4 className='text-orange font-bold text-2xl'>Aviso de privacidad</h4>
          <h4 className='text-orange font-bold text-2xl'>Condiciones de servicio</h4>
          <h4 className='text-orange font-bold text-2xl'>Tangerine School &copy; 2023</h4>
        </div>
      </div>  
    </footer>
  )
}
