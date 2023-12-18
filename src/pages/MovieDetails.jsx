import Header from 'components/Header/Header';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/movies.api';
import {
  LinkWrapper,
  MovieInfo,
  MovieInfoWrapper,
  StyledNavLink,
  StyledSection,
} from 'components/MovieDetails/MovieDetails.styled';
import { StyledBtn } from 'components/SearchBar/SearchBar.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const fetchMoviesById = async () => {
      try {
        const res = await fetchMovies(`/movie/${movieId}`);
        setMovieInfo(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesById();
  }, [movieId]);

  const { original_title, vote_average, overview, genres, poster_path } =
    movieInfo;

  const handleGoBack = () => {
    console.log('ha');
  };

  return (
    <>
      <Header />
      <StyledSection>
        <div>
          <StyledBtn onClick={handleGoBack}>Go back</StyledBtn>
        </div>
        <MovieInfoWrapper>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="movie poster"
            width="280"
            height="400"
            loading="lazy"
          />
          <MovieInfo>
            <h1>{original_title}</h1>
            <p>User score: {vote_average}/10</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres?.map(genre => genre.name + ' ')}</p>
          </MovieInfo>
        </MovieInfoWrapper>
        <LinkWrapper>
          <StyledNavLink to="cast">Cast</StyledNavLink>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
        </LinkWrapper>
      </StyledSection>
    </>
  );
};

export default MovieDetails;
