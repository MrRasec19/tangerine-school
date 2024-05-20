import { comments } from '../../data/comments.js';
import { OpinionCard } from './OpinionCard.jsx';

export const OpinionsSlider = () => {

  return (
    <div id="content" className='w-full'>
      <div className='opinions-content'>
        <div className='opinions-slide'>
              {
                comments.map( (comment) => {
                  return(
                    <OpinionCard key={ comment.id } comment={ comment.comment } name={ comment.name } from={ comment.from } />
                  )
                })
              }
          </div>
      </div>
      <div className='opinions-content'>
        <div className='opinions-slide'>
              {
                comments.map( (comment) => {
                  return(
                    <OpinionCard key={ comment.id } comment={ comment.comment } name={ comment.name } from={ comment.from } />
                  )
                })
              }
          </div>
      </div>
    </div>
  )
}
