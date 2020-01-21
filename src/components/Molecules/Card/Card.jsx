import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css.js';
import Img from 'gatsby-image';
// import styled from 'styled-components'
// import { space, width, fontSize, color } from 'styled-system'
// import { Link as RouteLink } from 'react-router-dom';
// import styled from 'styled-components';
// const CardStyles = styled.div`
//   font-family: 'Roboto', sans-serif;
// `;
// const StyledImage = styled.img`
//   width: 300px;

//   ${({ featured }) =>
//     featured &&
//     `
//     width:500px;
//   `}
// `;

// const StyledImageCard = styled.img`
//   font-family: 'Roboto', sans-serif;
//   height: 500px;
//   width: 300px;
// `;

const Card = ({
  link,
  tag,
  title,
  description,
  company,
  picture,
  variation,
  className,
  featured,
}) => (
  <a href={link} className={className + '' + variation}>
    <div className="top">
      {/* <img
        style={styles.CardImage}
        featured={featured}
        className="card-image"
        alt={title}
        src={picture}
      /> */}
      <Img fixed={picture} alt="Cristina Llamas Picture" />
    </div>
    <div className="bottom">
      {title && <h2 style={styles.CardTitle}>{title}</h2>}
      {company && <h3 style={styles.CardTitle}>{company}</h3>}
      {tag && <h4>{tag}</h4>}
    </div>
  </a>
);
Card.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  variation: PropTypes.string,
  // picture: PropTypes.string,
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
  // picture: 'https://picsum.photos/id/2/500/350',
  tag: 'tag',
  description: 'Lorem ipsum',
};

export default Card;
