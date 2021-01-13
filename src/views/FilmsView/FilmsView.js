import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../services/film-api';
import s from './FilmsView.module.css';

export default function FilmsView({ films }) {
  const { url } = useRouteMatch();

  return (
    <ul className={s.list}>
      {films.map(film => (
        <li key={film.id} className={s.item}>
          <Link to={`${url}/${film.id}`} className={s.link}>
            <img
              className={s.image}
              src={IMAGE_URL + film.poster_path}
              alt={film.title}
              width="300"
              height="450"
            />
            <p className={s.title}>{film.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

FilmsView.propTypes = {
  images: PropTypes.array,
};
