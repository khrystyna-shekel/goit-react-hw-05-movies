import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/movies.api';
import { CastMemberInfo, StyledCastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await fetchMovies(`/movie/${movieId}/credits`);
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
        <StyledCastList>
          {cast.map(el => {
            return (
              <li key={el.id}>
                <img
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/original${el.profile_path}`
                      : 'https://cdn-icons-png.flaticon.com/512/3106/3106773.png'
                  }
                  alt="actor avatar"
                  width="200"
                  height="280"
                  loading="lazy"
                />
                <CastMemberInfo>
                  <h4>{el.name}</h4>
                  <p>{el.character}</p>
                </CastMemberInfo>
              </li>
            );
          })}
        </StyledCastList>
      )}
    </>
  );
};

export default Cast;
