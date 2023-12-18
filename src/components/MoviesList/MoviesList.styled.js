import styled from 'styled-components';

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 15px;
`;

export const StyledList = styled.ul`
  display: grid;
  max-width: calc(100vw - 45px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 15px;
  padding: 30px 15px;
`;
