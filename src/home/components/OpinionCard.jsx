import PropTypes from 'prop-types';

export const OpinionCard = ({ comment, name, from }) => {
  return (
    <div className='opinion-card bg-rose-thiny rounded-3xl px-10 pt-10 pb-5 flex flex-col justify-between h-80'>
        <div>
            <h6 id='opinion-text' className='text-orange font-bold text-xl'>
                { comment }
            </h6>
        </div>
        <div>
            <span className='text-orange font-bold text-4xl mr-2'>{ name }</span>
            <span className='text-orange font-bold text-2xl'>{ from }</span>
        </div>
    </div>
  )
}

OpinionCard.propTypes = {
    comment: PropTypes.string,
    name: PropTypes.string,
    from: PropTypes.string,
}
