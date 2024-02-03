import { opinons } from '../../data/opinions.js';
import { OpinionCard } from './OpinionCard.jsx';

export const OpinionsSlider = () => {
  return (
    <div id="opinions-content" className='w-full'>
        <div id="opinions-slide" className='w-full flex flex-nowrap overflow-hidden justify-center'>
            {
              opinons.map( (op) => {
                return(
                  <OpinionCard key={ op.id } opinion={ op.opinion } userName={ op.userName } userSocialName={ op.userSocialName } city={ op.city } state={ op.state } />
                )
              })
            }
        </div>
    </div>
  )
}
