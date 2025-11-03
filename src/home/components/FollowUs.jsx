import OrangeShine from "../../assets/brillito-naranja-tangerine.svg?react";
import FacebokIcon from "../../assets/icono-facebook-tangerine.png";
import InstagramIcon from "../../assets/icono-instagram-tangerine.png";
import YoutubeIcon from "../../assets/icono-youtube-tangerine.png";
import TiktokIcon from "../../assets/icono-tiktok-tangerine.png"

export const FollowUs = () => {
  return (
    <article
      className="bg-rose-thiny px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16 sm:py-24 lg:py-36 flex justify-center items-center flex-col"
      id="follow-us"
      
    >
      {/* Brillito decorativo arriba a la derecha */}
      <div className="flex w-full justify-end items-center mb-4 sm:mb-0" data-aos="zoom-in">
        <OrangeShine className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 aspect-square" />
      </div>

      {/* Contenedor central */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center relative px-2 sm:px-6" >
        
        {/* Título */}
        <h3
          className="text-orange font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl mb-16 leading-tight"
          data-aos="zoom-in"
        >
          ¡Síguenos!
        </h3>

        {/* Texto */}
        <div className="text-orange font-extrabold text-center hyphens-auto xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl" data-aos="fade-up">
          <span className="inline">
            Nos gusta crear contenido educativo y divertido de acceso público
          </span>
          <span className="block">
            para que sigas aprendiendo y practicando después de clases
          </span>
        </div>

        {/* Íconos sociales */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-10" data-aos="fade-up">
          <a
            href="https://www.instagram.com/tangerineschool/?hl=es-la"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" src={InstagramIcon} alt="Icono instagram" loading="lazy" />
          </a>
          <a
            href="https://www.facebook.com/Tangerinenglish"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" src={FacebokIcon} alt="Icono facebook" loading="lazy" />
          </a>
          <a
            href="https://www.tiktok.com/@boytangerine"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" src={TiktokIcon} alt="Icono tiktok" loading="lazy" />
          </a>
          <a
            href="https://youtube.com/@tangerineschool?si=hiZxuvhQ5ija7c4E"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square" src={YoutubeIcon} alt="Icono youtube" loading="lazy" />
          </a>
        </div>

      </div>
    </article>
  );
};
