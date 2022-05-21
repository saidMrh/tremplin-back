import React from "react";
import cn from "classnames";
import styles from "./Preview.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";

const Preview = ({ visible, onClose }) => {
  return (
    <div className={cn(styles.preview, { [styles.visible]: visible })}>
      <button className={styles.close} onClick={onClose}>
        <Icon name="close" size="24" />
      </button>
      <Card
        className={styles.card}
        classCardHead={styles.head}
        title="Visualisation"
        classTitle="title-blue"
        head={
          <button className={styles.button}>
            <Icon name="expand" size="24" />
          </button>
        }
      >
        <div className={styles.body}>
          <div className={styles.photo}>
            <img src="/images/content/cv.jpg" alt="Product" />
          </div>
          <div className={styles.line}>
            <div className={styles.title}>
             Mon cv
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src="/images/content/avatar.jpg" alt="Avatar" />
            </div>
            <div className={styles.text}>
              par <span>Dana ZOUAOUI</span>, le 22 Mai 2022
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Preview;
