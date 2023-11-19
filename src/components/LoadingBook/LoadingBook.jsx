import React from 'react';
import css from './LoadingBook.module.css';

const LoadingBook = () => {
  return (
    <div  className={css.bookWrapper}>
      <div className={css.book}>
        <div className={css.inner}>
          <div className={css.left}></div>
          <div className={css.middle}></div>
          <div className={css.right}></div>
        </div>
        <ul className={css.ul}>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
          <li className={css.li}></li>
        </ul>
      </div>
    </div>
  );
};

export default LoadingBook;
