import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage1.css";

const RegistrationPage1 = () => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="registration-page1">
      <div className="create-account">Create Account</div>
      <img
        className="iconsaxlineargoogle"
        alt=""
        src="../iconsaxlineargoogle.svg"
      />
      <div className="or-use-your">Or use your email for registration:</div>
      <img
        className="digital-screen-with-environmen-icon1"
        alt=""
        src="../digitalscreenwithenvironmentday-1@2x.png"
      />
      <form className="sign1" method="post">
        <input className="rectangle-input" type="text" />
        <input className="sign-child1" type="text"  />
        <input className="sign-child2" type="password"  />
        <div className="name">Name</div>
        <div className="email1">Email</div>
        <div className="password1">Password</div>
        <input className="sign-child3" type="checkbox" required />
        <div className="i-agree-to">
          I agree to the Terms and Privacy Policy.
        </div>
        <button className="sign-child4" />
        <button className="sign-child5" />
        <div className="sign-up">Sign Up</div>
        <div className="sign-in1" onClick={onSignInTextClick}>
          Sign In
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage1;
