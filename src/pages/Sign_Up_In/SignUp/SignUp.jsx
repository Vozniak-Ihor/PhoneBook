import { useInput } from '../../../hooks/useValidationForm';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelector } from '../../../redux/auth/selectors';
import { registrationThunk } from 'redux/auth/operations';
const SignUp = () => {
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

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
          type="text"
          name="name"
          placeholder="User name"
          required
          value={name.value}
          onChange={e => name.onChange(e)}
          onBlur={e => name.onBlur(e)}
          className="logFormInput"
        />
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
