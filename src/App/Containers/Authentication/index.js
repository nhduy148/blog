import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionSignIn, actionSignUp, actionAuthen } from '../../Actions';

function Authentication( props ) {

  const dispatch = useDispatch();

  let reduxProps = useSelector(state => ({
    isLogged: state.isLogged,
    currentUser: state.currentUser,
    
    signingIn: state.signingIn,
    signinStatus: state.signinStatus,
    signinStatusText: state.signinStatusText,
    token: state.token,

    signupStatus: state.signupStatus,
    signupStatusText: state.signupStatusText,
  }))

  let { isLogged, currentUser, signinStatus } = reduxProps;

  let form = props.match.params.mode;  
  form = form || "signin";
  
  const [activeForm, setActiveForm] = useState(form);

  const signin = (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    dispatch(actionSignIn(data));
  }

  const signup = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      nicename: e.target.nicename.value
    }
    dispatch(actionSignUp(data))
  }

  const goBack = () => {
    props.history.goBack();
  }

  useEffect(() => {
    if(signinStatus === true) {
      dispatch(actionAuthen());
    }
  }, [dispatch, signinStatus])

  return isLogged
  ? currentUser.role === 0 ? <Redirect to="/admin" /> : <Redirect to="/" />
  : <div className="authen">
      <h3 className="go-back" onClick={() => goBack()}><i className="fal fa-arrow-left"></i> Go back</h3>
      <h2>Sign in / up</h2>
      <div className={`container${activeForm.toLowerCase() === "signup" ? " right-panel-active" : ""}`} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => signup(e)}>
            <h1>Create Account</h1>
            <div className="social-container">
              <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
              <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
            </div>
            <span>or use your email for registration</span>
            <input type="email" placeholder="Email" name="email" required />
            <input type="username" placeholder="Username" name="username" required />
            <input type="password" placeholder="Password" name="password" required />
            <input type="text" placeholder="Name" name="nicename" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => signin(e)}>
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
              <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Username" name="username" required />
            <input type="password" placeholder="Password" name="password" required />
            <Link to="#">Forgot your password?</Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => setActiveForm("signin")}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              {
                isLogged === true
                ? <h3 className="welcome-back">Welcome back! <span className="name">{currentUser.name}</span></h3>
                : <>
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" onClick={() => setActiveForm("signup")} >Sign Up</button>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
}

export default Authentication;
