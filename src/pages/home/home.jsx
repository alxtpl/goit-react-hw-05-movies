import s from '../../style.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesList } from '../../api/MovieApi';
import { useLocation } from 'react-router';
import Navigation from '../../components/Navigation/Navigation';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMoviesList().then(data => setMovies(data));
  }, []);

  return (
    <>
      <Navigation />
      <hr />
      <div className={s.all}>
        <h2>Trending today</h2>
        <hr />
        <ul className={s.all}>
          {movies &&
            movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: { location } },
                  }}
                  className={s.all}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Home;