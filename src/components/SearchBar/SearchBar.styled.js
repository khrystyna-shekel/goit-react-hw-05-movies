import styled from 'styled-components';

export const StyledWrapper = styled.section`
  margin-top: 15px;

  form {
    display: flex;
    justify-content: center;
    align-items: baseline;
    column-gap: 10px;
  }
`;

export const StyledInput = styled.input`
  width: 230px;
  height: 24px;
  padding: 4px;
  border: 2px solid lightgray;
  outline: none;

  &:focus {
    border: 2px solid red;
    border-radius: 5px;
  }
`;

export const StyledBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  min-width: 80px;
  min-height: 32px;

  color: red;
  background-color: white;
  font-weight: 600;
  box-shadow: 2px 2px 4px 1px lightgray;
  transition: all 300ms;

  &:hover {
    scale: 1.03;
  }
`;
