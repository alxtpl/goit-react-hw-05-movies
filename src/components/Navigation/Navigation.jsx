import { NavLink } from 'react-router-dom';
import s from '../../style.module.css';


const Navigation = () => {
  return (
    <nav className={s.all}>
      <NavLink
        exact
        className={s.all}
        activeClassName={s.active}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={s.all}
        activeClassName={s.active}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;