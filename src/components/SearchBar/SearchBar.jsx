import React from 'react';
import { StyledWrapper, StyledInput, StyledBtn } from './SearchBar.styled';

const SearchBar = ({ handleSubmit }) => {
  return (
    <StyledWrapper>
      <div>
        <form onSubmit={handleSubmit}>
          <StyledInput type="text" name="search" placeholder="Batman" />
          <StyledBtn type="submit">Search</StyledBtn>
        </form>
      </div>
    </StyledWrapper>
  );
};

export default SearchBar;
