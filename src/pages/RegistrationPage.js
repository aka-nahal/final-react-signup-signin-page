import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/registration-page");
  }, [navigate]);

  return (
    <div className={styles.registrationPage}>
      <img
        className={styles.digitalScreenWithEnvironmenIcon}
        alt=""
        src="../digitalscreenwithenvironmentday-1@2x.png"
      />
      <div className={styles.welcomeBack}>Welcome back</div>
      <div className={styles.pleaseEnterYour}>Please enter your detail</div>
      <div className={styles.sign}>
        <div className={styles.signChild} />
        <div className={styles.signItem} />
        <div className={styles.email}>Email</div>
        <div className={styles.password}>Password</div>
        <div className={styles.signInner} />
        <div className={styles.rememberMe}>Remember Me</div>
        <div className={styles.dontHaveAn} onClick={onDontHaveAnClick}>
          Don’t have an account ? Sign up
        </div>
        <div className={styles.forgotPassword}>Forgot password</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.signIn}>Sign In</div>
      </div>
    </div>
  );
};

export default RegistrationPage;
