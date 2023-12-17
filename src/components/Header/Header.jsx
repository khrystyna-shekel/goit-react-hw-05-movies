import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
      </StyledHeader>
    </div>
  );
};

export default Header;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #080808;
  font-size: 24px;
  font-weight: 700;

  &.active {
    color: red;
  }
`;
