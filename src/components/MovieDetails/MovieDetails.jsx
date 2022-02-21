import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getMoviesDetails } from '../../api/MovieApi';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import s from '../../style.module.css';


const Cast = lazy(() => import('../cast/cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const history = useHistory();
  const location = useLocation();
  const URLwrapper = 'https://image.tmdb.org/t/p/w400/';

  useEffect(() => {
    getMoviesDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
  };
  // const historeChange = () => {
  //   history.goBack();
  // };

  return (
    <div className={s.all}>
      <button type="button" className={s.all} onClick={onGoBack}>
        Go back
      </button>

      <div className={s.all}>
        <img
          className={s.all}
          src={movie.poster_path ? `${URLwrapper}${movie.poster_path}` : null}
          alt=""
        />
        <div className={s.all}>
          <h2 className={s.all}>{movie.original_title}</h2>
          <p>User score: {movie.vote_average}</p>
          <p className={s.all}>Overview</p>
          <p>{movie.overview}</p>
          {movie.genres && (
            <>
              <p className={s.all}>Genres: </p>
              <ul className={s.all}>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className={s.all}>
        <p>Additional information</p>
        <ul className={s.all}>
          <li>
            <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default MovieDetails;