import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { fetchPopularFilmsForToday, IMAGE_URL } from '../../services/film-api';
import ErrorView from '../ErrorView/ErrorView';
import PendingView from '../PendingView/PendingView';
import s from './HomeView.module.css';

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function HomeView() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState({});
  const { url } = useRouteMatch();
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchPopularFilmsForToday()
      .then(request => setFilms(request.results))
      .then(setStatus(Status.RESOLVED))
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  if (status === Status.PENDING) {
    return <PendingView />;
  }

  if (status === Status.REJECTED) {
    return <ErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <h2 className={s.title}>Trending today</h2>
        <ul className={s.list}>
          {films.map(film => (
            <li key={film.id} className={s.list__item}>
              <Link className={s.title} to={`${url}movies/${film.id}`}>
                <img
                  className={s.image}
                  src={IMAGE_URL + film.poster_path}
                  alt={film.title}
                  width="400"
                />

                <div className={s.decsr}>
                  <h3 className={s.subtitle}>{film.title || film.name}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
