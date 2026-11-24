import PropTypes from 'prop-types';

export const DecorativeSvg = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex shrink-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
};

DecorativeSvg.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};