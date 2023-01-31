import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationPage1.module.css";

const RegistrationPage1 = () => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.registrationPage}>
      <div className={styles.createAccount}>Create Account</div>
      <img
        className={styles.iconsaxlineargoogle}
        alt=""
        src="../iconsaxlineargoogle.svg"
      />
      <div className={styles.orUseYour}>
        Or use your email for registration:
      </div>
      <img
        className={styles.digitalScreenWithEnvironmenIcon}
        alt=""
        src="../digitalscreenwithenvironmentday-1@2x.png"
      />
      <div className={styles.sign}>
        <div className={styles.signChild} />
        <div className={styles.signItem} />
        <div className={styles.signInner} />
        <div className={styles.name}>Name</div>
        <div className={styles.email}>Email</div>
        <div className={styles.password}>Password</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.iAgreeTo}>
          I agree to the Terms and Privacy Policy.
        </div>
        <div className={styles.signChild1} />
        <div className={styles.signChild2} />
        <div className={styles.signUp}>Sign Up</div>
        <div className={styles.signIn} onClick={onSignInTextClick}>
          Sign In
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage1;
