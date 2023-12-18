import styled from 'styled-components';

export const StyledLi = styled.li`
  padding: 10px;
  border-radius: 5px;
  transition: all 300ms;
  box-shadow: 2px 2px 4px 1px lightgray;

  &:hover {
    scale: 1.05;
    box-shadow: 1px 2px 3px lightgray;
  }

  img {
    width: 100%;
    border-radius: 4px;
  }

  h3 {
    font-size: 18px;
    text-align: center;
    padding-top: 4px;
  }
`;
