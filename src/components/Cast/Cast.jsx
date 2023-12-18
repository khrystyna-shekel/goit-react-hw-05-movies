import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/movies.api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await fetchMovies(`/movie/${movieId}/credits`);
        console.log(cast);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(el => {
            return (
              <li>
                <img src="" alt="" />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
