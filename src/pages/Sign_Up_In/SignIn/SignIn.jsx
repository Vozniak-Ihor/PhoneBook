import { useInput } from '../../../hooks/useValidationForm';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelector } from '../../../redux/auth/selectors';
import { loginThunk } from '../../../redux/auth/operations';
const SignIn = () => {
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true, isPassword: true });
  const handleSubmit = e => {
    e.preventDefault();
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;
    if (!password || !email) {
      alert('Please fill in all fields of the form');
      return;
    }
    dispatch(loginThunk({ email, password }));
  };
  return (
    <div className="form-container sign-in-container">
      <form className="logForm" onSubmit={handleSubmit}>
        <h1 className="logFormTitle">Sign in</h1>
        {/* <span className="logFormSpan"> or use your account</span> */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email.value}
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          className="logFormInput"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
          className="logFormInput"
        />
        <p className="logFormText2">Forgot your password?</p>
        <button
          className="logFormButtonSubmit"
          type="submit"
          disabled={!password.inputValid || !email.inputValid}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
