import React, { useState } from 'react';
import './Sign_Up_In.css';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  showOnlyTheLastOne: true,
  position: 'left-top',
  useIcon: false,
  clickToClose: true,
  messageMaxLength: 200,
  timeout: 5000,
  width: '300px',
});
const Sign_Up_In = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div
      className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}
      id="register"
    >
      <SignUp />
      <SignIn />

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="logFormTitle">Welcome Back!</h1>
            <p className="logFormText">
              To keep connected with us please login with your personal info
            </p>
            <button
              className="logFormButton"
              onClick={handleSignUpClick}
              id="signIn"
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="logFormTitle">Hello, Friend!</h1>
            <p className="logFormText">
              Enter your personal details and start the journey with us
            </p>
            <button
              className=" logFormButton"
              onClick={handleSignUpClick}
              id="signUp"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up_In;
