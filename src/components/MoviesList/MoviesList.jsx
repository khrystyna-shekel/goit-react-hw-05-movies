import MovieCard from 'components/MovieCard/MovieCard';
import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { StyledTitle, StyledList } from './MoviesList.styled';

const MoviesList = ({ movies, title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryWord = searchParams.get('queryWord');

  function handleClick(movieId) {
    const { state, pathname } = location;
    if (location.pathname === '/') {
      navigate(`movies/${movieId}`, { state: { ...state, from: pathname } });
    } else {
      navigate(`${movieId}`, {
        state: { ...state, from: `${pathname}?queryWord=${queryWord}` },
      });
    }
  }

  return (
    <section>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {movies?.map(({ title, id, poster_path }) => (
          <MovieCard
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
            handleClick={handleClick}
          />
        ))}
      </StyledList>
    </section>
  );
};

export default MoviesList;
