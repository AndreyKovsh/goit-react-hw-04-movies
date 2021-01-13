import PropTypes from 'prop-types';
import s from './ErrorView.module.css';

export default function ErrorView({ error }) {
  return (
    <div className={s.box} role="alert">
      <p className={s.title}>Sorry, something went wrong.</p>
      <p className={s.subtitle}>Error : {error}</p>
      <img alt={error} />
    </div>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
