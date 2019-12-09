import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { linkStyles } from '../../Atoms/Link/Link';

const StyledNavLink = styled(NavLink)`
  color: red;
  ${linkStyles}
`;

export { StyledNavLink };
