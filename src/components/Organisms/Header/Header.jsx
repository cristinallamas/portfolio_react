import React from 'react';
// import Link from "../../Atoms/Link/Link";
import Navigation from '../../Molecules/Navigation/Navigation';
import { linkStyles } from '../../Atoms/Link/Link';

import { Link as RouteLink } from 'react-router-dom';
import Logo from './flammable-flame-svgrepo-com.png';
import styled from 'styled-components';

const StyledLogo = styled.img`
  max-width: 50px;
  // @media (max-width: 320px) {
  //   max-width: 100%;
  // }
`;
const StyledRouteLink = styled(RouteLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const StyledHeader = styled.header`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
`;
// const StyledNavigation = styled(Navigation)`
//   min-width: 200px;
// `;
const StyledSlogan = styled.div`
  ${linkStyles}
  color: black;
`;

const Header = ({ navigation, slogan }) => (
  <StyledHeader className="header">
    <div className="header__logo">
      <StyledRouteLink to="/">
        {' '}
        <StyledLogo src={Logo} alt="logo" />
        <StyledSlogan className="slogan">{slogan}</StyledSlogan>
      </StyledRouteLink>
    </div>

    {navigation && (
      <Navigation
        id="header__main-menu"
        items={navigation}
        navClassName="header__navigation"
      />
    )}
  </StyledHeader>
);

export default Header;
