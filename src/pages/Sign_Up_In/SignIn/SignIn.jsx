
const SignIn = () => {
  return (
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
  );
};

export default SignIn;
