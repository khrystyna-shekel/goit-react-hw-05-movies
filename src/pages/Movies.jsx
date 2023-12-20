import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/movies.api';

const Movies = () => {
  const [, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const queryWord = searchParams.get('queryWord') || '';

  const handleSubmit = e => {
    e.preventDefault();
    const queryParam = e.target.search.value;
    setQuery(queryParam);
    setSearchParams(queryParam ? { queryWord: queryParam } : {});
  };

  useEffect(() => {
    if (queryWord.trim()) {
      const fetchSerchedMovie = async () => {
        try {
          const { results } = await fetchMovies('/search/movie', queryWord);
          setSearchedMovies(results);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchSerchedMovie();
    }
  }, [queryWord]);

  return (
    <div>
      <Header />
      <SearchBar handleSubmit={handleSubmit} />
      {searchedMovies.length > 0 && (
        <MoviesList
          title={`Movies with title "${queryWord}"`}
          movies={searchedMovies}
        />
      )}
    </div>
  );
};

export default Movies;
