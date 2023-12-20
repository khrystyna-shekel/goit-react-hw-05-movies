import React from 'react';
import { StyledLi } from './MovieCard.styled';

const MovieCard = ({ title, poster_path }) => {
  return (
    <StyledLi>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="movie poster"
        width="280"
        height="400"
        loading="lazy"
      />
      <h3>{title}</h3>
    </StyledLi>
  );
};

export default MovieCard;
