import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import Log from '../Sign_Up_In/Sign_Up_In';
const Home = () => {
  return (
    <>
      <div className={css.header}>
        <div className={css.innerHeader}>
          <h1 className={css.homeTitle}>Hello I'm your phone book </h1>
          <div className={css.containerNavLink}>
            <NavLink to="/registration" className={css.btn}>
              <svg width="280px" height="60px" viewBox="0 0 280 60">
                <polyline points="279,1 279,59 1,59 1,1 279,1" />
                <polyline points="279,1 279,59 1,59 1,1 279,1" />
              </svg>
              <span>Sign up now and add your first contact</span>
            </NavLink>
          </div>
        </div>

        <div>
          <svg
            className={css.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={css.parallax}>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />

              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
      <div>
        <a href="#register" className={css.wrapper}>
          <svg viewBox="0 0 24 90" className={css.scrollIcon}>
            <path d="M2,12H2V30a10,10,0,1,0,20,0V12A10,10,0,1,0,2,12ZM0,12a12,12,0,1,1,24,0V30A12,12,0,1,1,0,30V12Z" />
            <path d="M11,7v4a1,1,0,0,0,2,0V7a1,1,0,0,0-2,0Z" />
            <path
              className={css.arrow}
              d="M12,53l5.5-5.5a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42l-6.2,6.2a1,1,0,0,1-1.42,0L5,48.86a1,1,0,0,1,1.41-1.41Z"
            />
          </svg>
        </a>
      </div>
      <Log />
    </>
  );
};

export default Home;
