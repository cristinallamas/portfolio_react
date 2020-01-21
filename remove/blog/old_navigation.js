import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import { Link } from 'gatsby';

import { rhythm } from '../../utils/typography';

const Navigation = () => {
  //   const { data } = this.props

  const navLinks = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About Me',
      url: '/about',
    },
    {
      title: 'Work',
      url: '/work',
    },
    {
      title: 'Blog',
      url: '/blog',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];
  return (
    <ul
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between;`,
      }}
    >
      {navLinks.map(link => (
        <li
          style={{
            marginBottom: rhythm(2.5),
            marginLeft: rhythm(2.5),
          }}
        >
          <Link to={link.url}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

// {navLinks.map((link ) => {
//     <Link
//         to={link.url}
//         style={{
//         display: "flex`,
//         marginBottom: rhythm(2.5),
//     }}
//     >
//     {link.title}
//     </Link>
//     }
// }
