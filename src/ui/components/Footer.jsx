import '../styles/footer.css'
import IconTangerine from "../../assets/icono-tangerine.svg?react";
import { ContactInfo } from './ContactInfo';
import { ScheduleInfo } from './ScheduleInfo';

export const Footer = () => {
  return (
    <footer className='w-full bg-white absolute bottom-auto '>
      <IconTangerine className="w-14 h-14 iconTangerineFooter"/>
      <div className='grid grid-cols-2 grid-rows-2 pt-20'>
        <ContactInfo />
        <ScheduleInfo />
        <div className='w-full flex justify-around col-span-2 items-end pb-7'>
          <h4 className='text-orange font-bold text-2xl'>Aviso de privacidad</h4>
          <h4 className='text-orange font-bold text-2xl'>Condiciones de servicio</h4>
          <h4 className='text-orange font-bold text-2xl'>Tangerine School &copy; 2023</h4>
        </div>
      </div>  
    </footer>
  )
}
