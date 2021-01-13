import { useState, useEffect } from 'react';
import { fetchCastForFilm, IMAGE_URL } from '../../services/film-api';
import s from './CastView.module.css';

export default function CastView({ moviesId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCastForFilm(moviesId).then(request => setCast(request.cast));
  }, [moviesId]);

  return (
    <>
      {cast && (
        <>
          <ul className={s.list}>
            {cast.map(member => (
              <>
                {member.profile_path && (
                  <li key={member.profile_path} className={s.item}>
                    <img
                      src={IMAGE_URL + member.profile_path}
                      alt={member.name}
                      width="100"
                      height="150"
                    />
                    <p className={s.name}>{member.name}</p>
                  </li>
                )}
              </>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
