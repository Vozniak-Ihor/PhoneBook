import { useInput } from '../../../hooks/useValidationForm';
import { useDispatch } from 'react-redux';
// import { isLoadingSelector } from '../../../redux/auth/selectors';
import { registrationThunk } from 'redux/auth/operations';

const SignUp = () => {
  // const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const messageErrorName = message => {
    return (name.isDirty && name.nameError) ||
      (name.isDirty && name.isEmpty) ? (
      <>
        <div className="errorMessage">{message}</div>
      </>
    ) : (
      ''
    );
  };
  const messageErrorEmail = message => {
    return (email.isDirty && email.emailError) ||
      (email.isDirty && email.isEmpty) ? (
      <>
        <div className="errorMessage">{message}</div>
      </>
    ) : (
      ''
    );
  };
  const messageErrorPassword = message => {
    return (password.isDirty && password.passwordError) ||
      (password.isDirty && password.isEmpty) ? (
      <>
        <div className="errorMessage">{message}</div>
      </>
    ) : (
      ''
    );
  };
  const seePassword = () => {
    const x = document.getElementById('passwordInputt');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  };

  const name = useInput('', { isEmpty: true, isName: true });
  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true, isPassword: true });

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;
    if (!name || !password || !email) {
      alert('Please fill in all fields of the form');
      return;
    }
    dispatch(registrationThunk({ name, email, password }));
  };
  return (
    <div className="form-container sign-up-container">
      <form className="logForm" onSubmit={handleSubmit}>
        <h1 className="logFormTitle">Create Account</h1>
        {/* <span className="logFormSpan">
            or use your email for registration
          </span> */}
        <input
          className={`logFormInput${
            name.isDirty && name.nameError ? ' inputError' : ''
          }`}
          type="text"
          name="name"
          placeholder="User name"
          required
          value={name.value}
          onChange={e => name.onChange(e)}
          onBlur={e => name.onBlur(e)}
        />
        {messageErrorName('Min 2 English letters')}
        <input
          className={`logFormInput${
            email.isDirty && email.emailError ? ' inputError' : ''
          }`}
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email.value}
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
        />
        {messageErrorEmail('Not valid e-mail*')}

        <div className="checkboxConteiner">
          <input
            className={`logFormInput${
              password.isDirty && password.passwordError ? ' inputError' : ''
            }`}
            type="password"
            id="passwordInputt"
            name="password"
            placeholder="Password"
            required
            onChange={e => password.onChange(e)}
            onBlur={e => password.onBlur(e)}
          />

          <input
            className="checkbox"
            type="checkbox"
            onChange={seePassword}
            style={{ display: password ? 'block' : 'none' }}
          />
        </div>
        {messageErrorPassword('Min 8 chars, incl. both upper and lower case')}
        <button
          className="logFormButtonSubmit"
          type="submit"
          disabled={
            !name.inputValid || !password.inputValid || !email.inputValid
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
