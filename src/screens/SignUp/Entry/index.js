import React from "react";
import cn from "classnames";
import styles from "./Entry.module.sass";
import TextInput from "../../../components/TextInput";
import Image from "../../../components/Image";

const Entry = ({ onConfirm }) => {
  return (
    <div className={styles.entry}>
      <div className={styles.head}>
        <div className={styles.info}>S'inscrire avec Ouvrir un compte</div>
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
        <div className={styles.info}>Ou continuez avec l'adresse e-mail</div>
        <TextInput
          className={styles.field}
          name="email"
          type="email"
          placeholder="Votre email"
          required
          icon="mail"
        />
        <button className={cn("button", styles.button)} onClick={onConfirm}>
          Continuez
        </button>
        <div className={styles.note}>
          Ce site est protégé par reCAPTCHA et la politique de confidentialité de Google.
        </div>
      </div>
    </div>
  );
};

export default Entry;
