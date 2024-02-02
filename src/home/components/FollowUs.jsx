import OrangeShine from "../../assets/brillito-naranja-tangerine.svg?react";
import FacebokIcon from "../../assets/icono-facebook-tangerine.svg?react";
import InstagramIcon from "../../assets/icono-instagram-tangerine.svg?react";
import YoutubeIcon from "../../assets/icono-youtube-tangerine.svg?react";
import TiktokIcon from "../../assets/icono-tiktok-tangerine.svg?react";
import { TangerineRoseButton } from "./TangerineRoseButton";

export const FollowUs = () => {
  return (
    <article className='bg-rose-thiny px-10 py-40 flex items-center justify-center' id='follow-us'>
      <div className="grid grid-cols-12">
        <div className="col-start-11 col-end-12">
            <OrangeShine id="orange-shine" className="w-14 h-14 text-white"/>
        </div>
        <div className="col-start-6 col-end-9">
            <h3 id="title" className="text-orange text-7xl w-full font-bold">
                ¡Síguenos!
            </h3>
        </div>
        <div className="col-start-2 col-end-12">
            <TangerineRoseButton text={"Nos gusta crear contenido educativo y divertido de acceso público para que sigas aprendiendo y practicando después de clases"} />
        </div>
        <div className="col-start-5 col-end-9 flex justify-evenly mt-10">
            <a href="https://www.instagram.com/tangerineschool/?hl=es-la" target="_blank" rel="noreferrer">
                <InstagramIcon className="col-span-3 social-media-icons" />
            </a>
            <a href="https://www.facebook.com/Tangerinenglish" target="_blank" rel="noreferrer">
                <FacebokIcon className="col-span-3 social-media-icons" />
            </a>
            <a href="https://www.tiktok.com/@boytangerine" target="_blank" rel="noreferrer">
                <TiktokIcon className="col-span-3 social-media-icons" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <YoutubeIcon className="col-span-3 social-media-icons" />
            </a>
        </div>
      </div>
    </article>
  )
}
