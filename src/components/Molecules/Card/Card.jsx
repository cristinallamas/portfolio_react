import React from "react";
import PropTypes from "prop-types";
// import styled from 'styled-components'
// import { space, width, fontSize, color } from 'styled-system'

import Link from "../../Atoms/Link/Link";
// import './_style.scss';
// Add styled-system functions to your component

const Card = ({
  link,
  tag,
  title,
  description,
  picture,
  variation,
  className
}) => (
  <div className={className}>
    <div className="left">
      {tag && <h3>{tag}</h3>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {/* <Link href={'/'} >Details</Link> */}
      <button>Details</button>
    </div>
    <div className="right">
      <img src={picture} />
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
  tag: PropTypes.string
};

/**
 * Default props
 */
Card.defaultProps = {
  link: "/my-link",
  title: "Title",
  className: "project__card",
  variation: "standard",
  picture: "https://picsum.photos/id/2/500/350",
  tag: "tag",
  description: "Lorem ipsum"
};

export default Card;
