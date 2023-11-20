import React from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useInput } from '../../../hooks/useValidationForm';
import { loginThunk } from '../../../redux/auth/operations';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../../../redux/auth/selectors';

const SignIn = () => {
  const isLoading = useSelector(isLoadingSelector);
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

    dispatch(loginThunk({ email: emailValue, password: passwordValue }))
      .then(response => {
        if (response.payload === 'Request failed with status code 401') {
          Notify.failure('Incorrect email or password*');
        }
      })
      .catch(error => {
        console.error(error);
      });
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
          disabled={email.isEmpty || password.isEmpty}
        >
          {isLoading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
