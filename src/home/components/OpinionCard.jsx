import PropTypes from 'prop-types';

export const OpinionCard = ({ opinion, userName, userSocialName, city, state }) => {
  return (
    <div className='opinion-card bg-rose-thiny rounded-3xl px-10 pt-10 pb-5 flex flex-col justify-between'>
        <div>
            <h6 id='opinion-text' className='text-orange font-bold text-xl'>
                { opinion }
            </h6>
        </div>
        <div>
            <span className='text-orange font-bold text-4xl mr-2'>{ userName }</span>
            <span className='text-orange font-bold text-2xl'>{ city }, { state }</span>
            <div>
                <span className='text-orange font-bold text-2xl'>{ userSocialName }</span>
            </div>
        </div>
    </div>
  )
}

OpinionCard.propTypes = {
    opinion: PropTypes.string,
    userName: PropTypes.string,
    userSocialName: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
}
