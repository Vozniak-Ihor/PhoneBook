import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../../hooks/useValidationForm';
import { loginThunk } from '../../../redux/auth/operations';
import { isLoadingSelector } from '../../../redux/auth/selectors';

const SignIn = () => {
  // const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  const seePassword = () => {
    const x = document.getElementById('passwordInput');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true, isPassword: true });

  const handleSubmit = e => {
    e.preventDefault();
    const passwordValue = e.target.elements.password.value;
    const emailValue = e.target.elements.email.value;

    if (!passwordValue || !emailValue) {
      alert('Please fill in all fields of the form');
      return;
    }

    dispatch(loginThunk({ email: emailValue, password: passwordValue }));
  };

  return (
    <div className="form-container sign-in-container">
      <form className="logForm" onSubmit={handleSubmit}>
        <h1 className="logFormTitle">Sign in</h1>
        {/* <span className="logFormSpan"> or use your account</span> */}
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email.value}
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          className="logFormInput"
        />
        <div className="checkboxConteiner">
          <input
            type="password"
            id="passwordInput"
            name="password"
            placeholder="Password"
            required
            onChange={e => password.onChange(e)}
            onBlur={e => password.onBlur(e)}
            className="logFormInput"
          />

          <input
            className="checkbox"
            type="checkbox"
            onChange={seePassword}
            style={{ display: password ? 'block' : 'none' }}
          />
        </div>
        <p className="logFormText2">Forgot your password?</p>
        <button
          className="logFormButtonSubmit"
          type="submit"
          disabled={email.isEmpty|| password.isEmpty}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
