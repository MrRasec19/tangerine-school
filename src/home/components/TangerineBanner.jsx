import { IoIosArrowDown } from "react-icons/io";
import Tangerino from "../../assets/tangerino-grande-tangerine.svg?react";
import '../styles/home.css'
import { TangerineButton } from './TangerineButton';
import { TangerineRoseButton } from "./TangerineRoseButton";

export const TangerineBanner = () => {
  return (
    <article className='py-14 text-center bg-rose-thiny flex flex-col items-center justify-end' id='home-section'>
        <h1 className='text-8xl font-bold text-orange'>Inglés en línea</h1>
        <h2 className='text-7xl font-bold text-blue-strong mb-8'>Clases 100% en vivo</h2>
        <TangerineButton />
        <TangerineRoseButton text={"Contáctanos"} />
        <h3 className='text-orange font-bold text-4xl flex flex-col items-center mt-3'><a href="#">Quiero saber más</a><IoIosArrowDown className='text-orange font-bold text-4xl' /></h3>
        <Tangerino className="tangerino" />
    </article>
  )
}
