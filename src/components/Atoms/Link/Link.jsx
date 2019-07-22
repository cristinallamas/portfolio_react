import React from "react";
import PropTypes from "prop-types";
// import "./_style.scss";

const Link = ({ href, onClick, className, target, children }) => (
  <a href={href} onClick={onClick} className={className} target={target}>
    {children}
  </a>
);

/**
 * Valid props
 */
Link.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

/**
 * Default props
 */
Link.defaultProps = {
  href: "/my-link",
  onClick: () => {},
  target: "",
  className: "primary__link",
  children: []
};

export default Link;
