import React from 'react';
import Link from '../../Atoms/Link/Link';
import isExternal from 'is-url-external';
import { StyledNavLink } from './NavigationItem.styles';

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
