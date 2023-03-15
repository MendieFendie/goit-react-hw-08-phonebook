import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export function Navigation() {
  return (
    <>
      <nav>
        <StyledLink to="/">Main</StyledLink>
        <StyledLink to="/">Contacts</StyledLink>
      </nav>
    </>
  );
}
