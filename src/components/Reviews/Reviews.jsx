import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/movies.api';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState({});

  useEffect(() => {
    const getReview = async () => {
      try {
        const res = await fetchMovies(`/movie/${movieId}/reviews`);
        console.log(res);
        setReview(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <>
      <section></section>
    </>
  );
};

export default Reviews;
