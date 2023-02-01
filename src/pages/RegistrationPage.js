import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/registration-page");
  }, [navigate]);

  return (
    <div className="registration-page">
      <img
        className="digital-screen-with-environmen-icon"
        alt=""
        src="../digitalscreenwithenvironmentday-1@2x.png"
      />
      <div className="welcome-back">Welcome back</div>
      <div className="please-enter-your">Please enter your detail</div>
      <form className="sign">
    
        <input className="sign-child1" type="text"  />
        <input className="sign-child2" type="password"  />
  
        <div className="email1">Email</div>
        <div className="password1">Password</div>
        <input className="sign-child3" type="checkbox" required />
        <div className="remember-me">Remember Me</div>
        <div className="dont-have-an" onClick={onDontHaveAnClick}>
          Don’t have an account ? Sign up
        </div>
        <div className="forgot-password">Forgot password</div>
        <button className="rectangle-button" />
        <div className="sign-in">Sign In</div>
      </form>
    </div>
  );
};

export default RegistrationPage;
