
import React from 'react';
import PropTypes from 'prop-types';
// import './_style.scss';

const Button = (
    {
      type,
      className,
      label,
      disabled,
      children,
      onClick,
      srLabel,
    },
  ) => (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={srLabel}
      title={srLabel}
    >
      {label}
      {children}
    </button>
  );


/**
 * Valid props
 */
Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  className: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  srLabel: PropTypes.string,
};

/**
 * Default props
 */
Button.defaultProps = {
  type: 'button',
  label: '',
  className: 'primary__button',
  disabled: false,
  children: [],
  onClick: () => {},
  srLabel: 'Button',
};

export default Button;
