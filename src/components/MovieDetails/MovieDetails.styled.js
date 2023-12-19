import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 20px;

  div:first-child {
    padding-bottom: 10px;
  }
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: flex-start;
  height: fit-content;
  width: 70%;

  p {
    font-size: 20px;
    line-height: 1.21em;
  }
`;

export const LinkWrapper = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: #080808;
  font-size: 24px;
  font-weight: 700;

  &.active {
    color: red;
  }
`;
