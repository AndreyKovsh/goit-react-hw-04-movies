import React from 'react';
import Spinner from 'react-loader-spinner';
import s from './PendingView.module.css';

function Loader() {
  return (
    <Spinner
      className={s.Loader}
      type="Rings"
      color="orangered"
      height={400}
      width={400}
      timeout={5000}
    />
  );
}

export default Loader;
