import Header from 'components/Header/Header';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const goBackRef = useRef(location.state?.from || '/');

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
  const userScore = Number(vote_average).toFixed(1);

  const handleGoBack = () => {
    navigate(goBackRef.current);
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
            <p>User score: {userScore}/10</p>
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
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </StyledSection>
    </>
  );
};

export default MovieDetails;
