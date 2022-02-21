import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../api/MovieApi';
import s from '../../style.module.css';


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <div>
      <ul className={s.all}>
        {reviews.length === 0 ? (
          <p>
            <b>We don't have any reviews for this movie</b>
          </p>
        ) : (
          reviews.map(review => (
            <li key={review.id} className={s.all}>
              <b>{review.author}</b>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;