import IconTangerine from "../../assets/icono-tangerine.svg?react";
import "../styles/home.css"; // Asegúrate de importar el CSS

export const TangerineButton = () => {
  return (
    <div className="relative mb-8 xl:!w-10/12 lg:!w-10/12 md:!w-10/12 sm:!w-2/3">
      <div className="bg-blue-strong rounded-full rounded-bl-none pt-4 pb-3 px-5 flex flex-col items-center justify-center">
        <h2 className="text-orange text-center md:mr-14 text-base font-extrabold mb-3 ml-5 lg:text-2xl xl:text-[1.5vw] lg:text-[2.5vw] md:text-[2.5vw] sm:text-[3.5vw] lg:mr-14 xl:mr-14 sm:mr-14 pl-7">
          Un enfoque practico y conversacional
        </h2>
        <IconTangerine className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:absolute md:absolute mb-2 iconTangerine" />
      </div>
      <div className="bubble-tail-left" />
    </div>
  );
};
