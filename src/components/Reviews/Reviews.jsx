import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/movies.api';
import styled from 'styled-components';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReview = async () => {
      try {
        const { results } = await fetchMovies(`/movie/${movieId}/reviews`);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReview();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <StyledList>
          {reviews.length > 0 ? (
            reviews.map(el => (
              <li key={el.id}>
                <h4>Author: {el.author}</h4>
                <h4>Username: {el.author_details.username}</h4>
                <h4>Rating: {el.author_details.rating}</h4>
                <p>{el.content}</p>
              </li>
            ))
          ) : (
            <h4>No reviews added</h4>
          )}
        </StyledList>
      )}
    </>
  );
};

export default Reviews;

const StyledList = styled.ul`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    box-shadow: 2px 2px 4px 1px gray;

    p {
      line-height: 1.2em;
      color: gray;
    }
  }
`;
