import { WaveSeparator } from '../../ui/components/WaveSeparator'
import { OurMethods } from '../components/OurMethods'
import { TangerineBanner, WhyStudyWhitUs2, Modalities, OurCompromise, FrequentlyQuestions, FollowUs, StudentsOpinions } from '../index'
import imgBluePattern from '../../assets/fondo-azul-tangerine.jpg'
import imgStarPattern from '../../assets/fondo-rosa-tangerine.jpg'

export const HomePage = () => {
  return (
    <main>
      <TangerineBanner />
      <WaveSeparator 
        color="#FFC6B6" 
        flip
        backGroundColor='bg-rose-thiny' 
      />
      <WhyStudyWhitUs2 />
      <WaveSeparator 
        color="#00274E" 
        flip
        backGroundColor='bg-orange-thiny' 
        imageUrl={imgBluePattern}
      />
      <OurMethods />
      <WaveSeparator 
        color="#00274E"
        backGroundColor='bg-yellow' 
        imageUrl={imgBluePattern}
      />
      <OurCompromise />
      <WaveSeparator 
        color="#FEF3ED" 
        flip
        backGroundColor='bg-yellow'
      />
      <Modalities />
      <WaveSeparator 
        color="#FFC6B6" 
        flip
        backGroundColor='bg-rose-thiny'
        imageUrl={imgStarPattern}
      />
      <StudentsOpinions />
      <WaveSeparator 
        color="#00274E" 
        flip
        backGroundColor='bg-orange-thiny'
      />
      <FrequentlyQuestions />
      <WaveSeparator 
        color="#FEF3ED" 
        flip
        backGroundColor='bg-blue-strong'
      />
      <FollowUs />
    </main>
  )
}
