import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignUp.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import Entry from "./Entry";
import Code from "./Code";
import Image from "../../components/Image";

const items = [
  "13 partenaires",
  "200 entreprises partenaires",
  "400 jeunes suivis"
];

const SignUp = () => {
  const [visible, setVisible] = useState(true);
  const heightWindow = use100vh();

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.wrap}>
          <div className={styles.preview}>
            <img src="/images/content/login-pic.png" alt="Login" />
          </div>
          <div className={cn("h3", styles.subtitle)}>Tremplin Handicap</div>
          <ul className={styles.list}>
            {items.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.col} style={{ minHeight: heightWindow }}>
        <div className={styles.head}>
          <Link className={styles.logo} to="/">
            <Image
              className={styles.pic}
              src="/images/logo-dark.png"
              srcDark="/images/logo-light.png"
              alt="Core"
            />
          </Link>
          <div className={styles.info}>
          Déjà membrer?{" "}
            <Link className={styles.link} to="/sign-in">
              
S'identifier
            </Link>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={cn("h2", styles.title)}>S'inscrire</div>
          {visible ? <Entry onConfirm={() => setVisible(false)} /> : <Code />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
