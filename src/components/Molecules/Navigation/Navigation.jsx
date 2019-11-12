import React from 'react';
import styled from 'styled-components';

import NavigationItem from '../NavigationItem/NavigationItem';

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;
const Navigation = ({ id, navClassName, items }) => (
  <div id={id} className={navClassName}>
    <nav
      role="navigation"
      itemScope="itemscope"
      itemType="http://schema.org/SiteNavigationElement"
    >
      <NavList>
        {items.map((item, index) => (
          <NavigationItem key={index} item={item} />
        ))}
      </NavList>
    </nav>
  </div>
);

export default Navigation;
