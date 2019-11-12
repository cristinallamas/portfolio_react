import React from 'react';
import Link, { StyledLink } from '../../Atoms/Link/Link';
// import { Link as RouteLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import isExternal from 'is-url-external';
import styled from 'styled-components';

// TODO: why this style is not being imported.
const StyledNavLink = styled(StyledLink)`
  color: red;
  ${StyledLink}
`.withComponent(NavLink);

const ProcessedLink = ({ url, title }) => {
  if (isExternal(url)) {
    return <Link href={url}>{title}</Link>;
  } else {
    return (
      <StyledNavLink to={url} activeClassName="active">
        {title}
      </StyledNavLink>
    );
  }
};
const NavigationItem = ({ item }) => (
  <li className="navigation--item">
    <ProcessedLink {...item} />
  </li>
);

export default NavigationItem;
