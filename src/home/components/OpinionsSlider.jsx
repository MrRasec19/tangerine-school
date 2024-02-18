import { opinons } from '../../data/opinions.js';
import { OpinionCard } from './OpinionCard.jsx';

export const OpinionsSlider = () => {

  return (
    <div id="content" className='w-full'>
      <div className='opinions-content'>
        <div className='opinions-slide'>
              {
                opinons.map( (op) => {
                  return(
                    <OpinionCard key={ op.id } opinion={ op.opinion } userName={ op.userName } userSocialName={ op.userSocialName } city={ op.city } state={ op.state } />
                  )
                })
              }
          </div>
      </div>
      <div className='opinions-content'>
        <div className='opinions-slide'>
              {
                opinons.map( (op) => {
                  return(
                    <OpinionCard key={ op.id } opinion={ op.opinion } userName={ op.userName } userSocialName={ op.userSocialName } city={ op.city } state={ op.state } />
                  )
                })
              }
          </div>
      </div>
    </div>
  )
}
