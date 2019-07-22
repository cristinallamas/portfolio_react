import React from "react";
import PropTypes from "prop-types";

import Link from "../../Atoms/Link/Link";
// import './_style.scss';

const Card = ({ link, title, className, children }) => (
  <div className={className}>
    {link && <Link href={link} />}
    {title && <h3>{ title }</h3>}
    {children}
  </div>
);
Card.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,

};

/**
 * Default props
 */
Card.defaultProps = {
  link: "/my-link",
  title: "Title",
  className: "project__card",
  children: [],

};

export default Card;
