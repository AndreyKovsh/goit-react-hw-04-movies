import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [filmName, setFilmName] = useState('');

  const onHandleSubmit = event => {
    event.preventDefault();
    if (filmName.trim() === '') {
      toast('Please enter search query!');
      return;
    }
    onSubmit(filmName);
    setFilmName('');
  };

  return (
    <header className={s.SearchBar}>
      <form className={s.SearchForm} onSubmit={onHandleSubmit}>
        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          value={filmName}
          onChange={({ target }) => setFilmName(target.value)}
          placeholder="Search films"
        />
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__buttonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
