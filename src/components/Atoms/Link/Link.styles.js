import styled, { css } from 'styled-components';

const linkStyles = css`
  text-decoration: none;
  color: #b3b3b3;
  font-family: 'mission_gothic', Arial, Verdana, sans-serif;
  font-size: 1em;
  line-height: 40px;
  border-radius: 22px;
  cursor: pointer;

  background: none;
  font-weight: 900;
  letter-spacing: 0.05em;
  transition: all 0.35s ease;
  &:hover {
    border-color: #1e1e31;
    color: #1e1e31;
  }
`;

const StyledLink = styled.a`
  ${linkStyles}
`;
const StyledButtonLink = styled.a`
  ${linkStyles}

  border: 2px solid #b3b3b3;
  border-radius: 22px;
  padding: 0 35px;
  margin: 0;
  background: none;
  display: inline-block;

  &:hover {
    border-color: #1e1e31;
    color: #1e1e31;
  }
`;

export { StyledButtonLink, StyledLink, linkStyles };
