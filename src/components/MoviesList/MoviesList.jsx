import MovieCard from 'components/MovieCard/MovieCard';
import React from 'react';
import { StyledTitle, StyledList } from './MoviesList.styled';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesList = ({ movies, title }) => {
  const [searchParams] = useSearchParams();
  const queryWord = searchParams.get('queryWord');
  const location = useLocation();
  const { state, pathname } = location;

  return (
    <section>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {movies?.map(({ title, id, poster_path }) => (
          <Link
            key={id}
            to={location.pathname === '/' ? `movies/${id}` : `${id}`}
            state={
              location.pathname === '/'
                ? { ...state, from: pathname }
                : { ...state, from: `${pathname}?queryWord=${queryWord}` }
            }
          >
            <MovieCard
              key={id}
              id={id}
              title={title}
              poster_path={poster_path}
            />
          </Link>
        ))}
      </StyledList>
    </section>
  );
};

export default MoviesList;
