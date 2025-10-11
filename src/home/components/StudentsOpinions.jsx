import { comments } from '../../data/comments.js';
import { OpinionCard } from './OpinionCard.jsx';

export const StudentsOpinions = () => {
  const doubledComments = [...comments, ...comments];

  return (
    <article id="students-opinions" className="w-full py-28 overflow-hidden">
      <div className="flex justify-center px-4">
        <p className="text-orange font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-14 leading-tight">
          ¿Qué opinan nuestros alumnxs?
        </p>
      </div>

      <div className="slider">
        <div className="slide-track">
          {doubledComments.map((comment, index) => (
            <div key={`${comment.id}-${index}`} className="inline-block">
              <OpinionCard
                comment={comment.comment}
                name={comment.name}
                from={comment.from}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
