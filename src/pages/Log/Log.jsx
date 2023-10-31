import React, { useState } from 'react';
import './Log.css';

const Log = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div
      className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}
      id="register"
    >
      <div className="form-container sign-up-container">
        <form className="logForm" action="#">
          <h1 className="logFormTitle">Create Account</h1>
          {/* <span className="logFormSpan">
            or use your email for registration
          </span> */}
          <input className="logFormInput" type="text" placeholder="Name" />
          <input className="logFormInput" type="email" placeholder="Email" />
          <input
            className="logFormInput"
            type="password"
            placeholder="Password"
          />

          <button className="logFormButtonSubmit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="logForm" action="#">
          <h1 className="logFormTitle">Sign in</h1>
          {/* <span className="logFormSpan"> or use your account</span> */}
          <input className="logFormInput" type="email" placeholder="Email" />
          <input
            className="logFormInput"
            type="password"
            placeholder="Password"
          />
          <p className="logFormText2">Forgot your password?</p>
          <button className="logFormButtonSubmit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="logFormTitle">Welcome Back!</h1>
            <p className="logFormText">
              To keep connected with us please login with your personal info
            </p>
            <button
              className="logFormButton"
              onClick={handleSignInClick}
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

export default Log;
