import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { searchMovies } from '../../api/MovieApi';
import Navigation from '../../components/Navigation/Navigation';
import s from '../../style.module.css';


const Movies = () => {
  const [input, setInput] = useState('');
  const history = useHistory();
  const location = useLocation();
  const { query } = qs.parse(location.search);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    query && searchMovies(query).then(movies => setMovies(movies));
  }, [query]);

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const setSearch = input => {
    history.push({ pathname: '/movies', search: '?query=' + input });
  };

  const hendleSubmit = e => {
    e.preventDefault();
    if (!input) return;
    setSearch(input);
  };

  return (
    <>
      <Navigation />
      <hr />
      <div className={s.all}>
        <form className={s.all} onSubmit={hendleSubmit}>
          <input
            className={s.all}
            type="text"
            autoComplete="off"
            value={input}
            autoFocus
            placeholder="Search movies"
            onChange={handleChange}
          />
          <button type="submit" className={s.all}>
            Search
          </button>
        </form>
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

export default Movies;