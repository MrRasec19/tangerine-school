import IconTangerine from "../../assets/icono-tangerine.svg?react";

export const TangerineButton = () => {
  return (
    <div className='bg-blue-strong flex flex-col md:flex-row items-center w-full md:w-fit rounded-3xl py-3 px-5 justify-start'>
        <h4 className='text-orange text-center md:text-left text-lg md:text-2xl font-bold md:mr-10 mb-4 md:mb-0'>
          Con enfoque conversacional y humanista
        </h4>
        <IconTangerine className="w-10 h-10 md:w-14 md:h-14 iconTangerine"/>
    </div>
  )
}
