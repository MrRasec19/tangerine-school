import '../styles/footer.css';
import IconTangerine from "../../assets/icono-tangerine.svg?react";
import { ContactInfo } from './ContactInfo';
import { ScheduleInfo } from './ScheduleInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white relative px-6 sm:px-10 pt-12 pb-6">
      <div className="flex justify-center mb-6" data-aos="zoom-in">
        <IconTangerine className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 iconTangerineFooter" />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-28 justify-center gap-10 mb-8" data-aos="fade-up">
        <ContactInfo />
        <ScheduleInfo />
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:justify-around text-center gap-2 sm:gap-0 mt-20" data-aos="fade-up">
        <h4 className="text-orange font-extrabold text-base sm:text-lg md:text-xl">Tangerine School &reg; {currentYear}</h4>
      </div>
    </footer>
  );
};
