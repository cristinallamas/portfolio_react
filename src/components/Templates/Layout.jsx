import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { rhythm, scale, myrhythm } from '../../utils/typography';
import styled, { injectGLobal } from 'styled-components';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .gatsby-highlight {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
`;

const StyledLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const StyledMain = styled.main`
  ${myrhythm.global}
  max-width: 680px;
  margin: auto;
`;
// max-width: `${rhythm(24)}`;
// padding: rhythm(1.5) rhythm(3 / 4);
class Layout extends React.Component {
  render() {
    const { children } = this.props;

    // const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <StyledLayout>
        <GlobalStyle />
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            {/* <Link to="/about">About</Link> */}
            <Link to="/work">Work</Link>
          </nav>
        </header>
        <StyledMain>{children}</StyledMain>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://styled-components.com">
            Styled Components
          </a>
          {` & `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` & `}
          <a href="https://www.netlify.com">Netlify</a>
        </footer>
      </StyledLayout>
    );
  }
}

export default Layout;
