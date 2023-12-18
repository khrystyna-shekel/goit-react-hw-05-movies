import Header from 'components/Header/Header';
import TrendingMoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'services/movies.api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await fetchMovies('/trending/movie/day');
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <Header />
      <TrendingMoviesList title="Trending today" movies={movies} />
    </div>
  );
};

export default Home;
