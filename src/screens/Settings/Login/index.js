import React from "react";
import cn from "classnames";
import styles from "./Login.module.sass";
import Item from "../Item";
import TextInput from "../../../components/TextInput";

const Login = ({ className }) => {
  return (
    <Item
      className={cn(styles.card, className)}
      title="Login"
      classTitle="title-purple"
    >
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="Ancien mot de passe"
          name="old-password"
          type="password"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <div className={styles.row}>
          <TextInput
            className={styles.field}
            label="Nouveau mot de passe"
            name="new-password"
            type="password"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            required
          />
          <TextInput
            className={styles.field}
            label="Confirmer le nouveau mot de passe"
            name="confirm-password"
            type="password"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            required
          />
        </div>
        <button className={cn("button-stroke", styles.button)}>
          Mettre à jour le mot de passe
        </button>
      </div>
    </Item>
  );
};

export default Login;
