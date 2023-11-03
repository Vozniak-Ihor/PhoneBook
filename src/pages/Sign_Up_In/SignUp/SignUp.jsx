const SignUp = () => {
  return (
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
  );
};

export default SignUp;
