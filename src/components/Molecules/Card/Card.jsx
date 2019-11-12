import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components'
// import { space, width, fontSize, color } from 'styled-system'
import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';
import { linkStyles } from '../../Atoms/Link/Link';

const Image = styled.img`
  max-width: 600px;
  @media (max-width: 320px) {
    max-width: 100%;
  }
`;

// TODO: why this style is not being imported.
const StyledRouteLink = styled(RouteLink)`
  color: red;
  ${linkStyles}
`;

const Card = ({
  link,
  tag,
  title,
  description,
  picture,
  variation,
  className,
}) => (
  <div className={className + '' + variation}>
    <div className="left">
      {tag && <h3>{tag}</h3>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      <StyledRouteLink to={link}>Details</StyledRouteLink>
    </div>
    <div className="right">
      <Image className="card-image" alt={title} src={picture} />
    </div>
  </div>
);
Card.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  variation: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.string,
};

/**
 * Default props
 */
Card.defaultProps = {
  link: '/my-link',
  title: 'Title',
  className: 'project__card',
  variation: 'standard',
  picture: 'https://picsum.photos/id/2/500/350',
  tag: 'tag',
  description: 'Lorem ipsum',
};

export default Card;
