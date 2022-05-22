import React from "react";
import cn from "classnames";
import styles from "./SignIn.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";

const SignIn = () => {
  const heightWindow = use100vh();
  
  return (
    <div className={styles.login} style={{ minHeight: heightWindow }}>
      <div className={styles.wrapper}>
        <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/logo-dark.png"
            srcDark="/images/logo-light.png"
            alt="Core"
          />
        </Link>
        <div className={cn("h2", styles.title)}>S'identifier</div>
        <div className={styles.head}>
          <div className={styles.subtitle}>S'inscrire avec un compte</div>
          <div className={styles.btns}>
            <button className={cn("button-stroke", styles.button)}>
              <img src="/images/content/google.svg" alt="Google" />
              Google
            </button>
            <button className={cn("button-stroke", styles.button)}>
              <img
              width={30}
                src="/images/content/facebook.png"
                alt="Apple"
              />
              Facebook
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.subtitle}>Ou continuez avec l'adresse e-mail</div>
          <TextInput
            className={styles.field}
            name="email"
            type="email"
            placeholder="Votre email"
            required
            icon="mail"
          />
          <TextInput
            className={styles.field}
            name="password"
            type="password"
            placeholder="*******"
            required
            icon="lock"
          />
          <a href="/" className={cn("button", styles.button)}>Sign in</a>
          <div className={styles.note}>
          Ce site est protégé par reCAPTCHA et la politique de confidentialité de Google.
          </div>
          <div className={styles.info}>
          Vous n'avez pas de compte ?{" "}
            <Link className={styles.link} to="/sign-up">
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
