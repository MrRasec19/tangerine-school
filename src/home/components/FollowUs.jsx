import OrangeShine from "../../assets/brillito-naranja-tangerine.svg?react";
import FacebokIcon from "../../assets/icono-facebook-tangerine.svg?react";
import InstagramIcon from "../../assets/icono-instagram-tangerine.svg?react";
import YoutubeIcon from "../../assets/icono-youtube-tangerine.svg?react";
import TiktokIcon from "../../assets/icono-tiktok-tangerine.svg?react";
import { TangerineRoseButton } from "./TangerineRoseButton";

export const FollowUs = () => {
  return (
    <article
      className="bg-rose-thiny px-4 sm:px-8 md:px-16 pb-20 sm:py-32 flex justify-center"
      id="follow-us"
    >
      <div className="w-full max-w-6xl flex flex-col items-center text-center relative">
        {/* OrangeShine SVG en posición superior derecha */}
        <div className="flex justify-center items-center absolute top-0 right-0 w-1/4 h-1/4 sm:w-1/6 sm:h-1/6 md:w-1/4 md:h-1/4 lg:w-1/5 lg:h-1/5">
          <OrangeShine className="w-40 sm:w-20 md:w-40 aspect-square" />
        </div>

        {/* Título */}
        <h3
          id="title"
          className="text-orange font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          ¡Síguenos!
        </h3>

        {/* Texto del botón */}
        <TangerineRoseButton
          text={
            "Nos gusta crear contenido educativo y divertido de acceso público para que sigas aprendiendo y practicando después de clases"
          }
        />

        {/* Íconos sociales */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 scale-150">
          <a
            href="https://www.instagram.com/tangerineschool/?hl=es-la"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <InstagramIcon className="w-8 sm:w-10 md:w-12 aspect-square" />
          </a>
          <a
            href="https://www.facebook.com/Tangerinenglish"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <FacebokIcon className="w-8 sm:w-10 md:w-12 aspect-square" />
          </a>
          <a
            href="https://www.tiktok.com/@boytangerine"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <TiktokIcon className="w-8 sm:w-10 md:w-12 aspect-square" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <YoutubeIcon className="w-8 sm:w-10 md:w-12 aspect-square" />
          </a>
        </div>
      </div>
    </article>
  );
};
