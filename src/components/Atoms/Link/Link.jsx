import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledButtonLink,
  StyledLink,
  linkStyles,
} from './Link.styles';

const Link = ({
  href,
  onClick,
  className,
  target,
  linkType,
  children,
}) => {
  if (linkType === 'button') {
    return (
      <StyledButtonLink
        href={href}
        onClick={onClick}
        className={className}
        target={target}
      >
        {children}
      </StyledButtonLink>
    );
  } else {
    return (
      <StyledLink
        href={href}
        onClick={onClick}
        className={className}
        target={target}
      >
        {children}
      </StyledLink>
    );
  }
};

/**
 * Valid props
 */
Link.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Default props
 */
Link.defaultProps = {
  href: '/my-link',
  onClick: () => {},
  className: 'primary__link',
  target: '',
  children: [],
};

export default Link;
export { StyledLink, StyledButtonLink, linkStyles };
