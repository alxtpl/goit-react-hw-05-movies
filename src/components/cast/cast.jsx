
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/MovieApi';
import { useState, useEffect } from 'react';
import s from '../../style.module.css';


const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const URLwrapper = 'https://image.tmdb.org/t/p/w400/';

  useEffect(() => {
    getMovieCast(movieId).then(data => setCast(data));
  }, [movieId]);

  return (
    <div>
      <ul className={s.all}>
        {cast.length === 0 ? (
          <p>Wait for it</p>
        ) : (
          cast.map(actor => (
            <li key={actor.id} className="{style.item}">
              <img
                className={s.all}
                src={
                  actor.profile_path
                    ? `${URLwrapper}${actor.profile_path}`
                    : null
                }
                alt=""
              />
              <p>
                <b>{actor.name}</b>
              </p>
              <p>Character: </p>
              <p>{actor.character}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;