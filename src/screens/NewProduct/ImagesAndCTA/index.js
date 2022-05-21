import React, { useState } from "react";
import cn from "classnames";
import styles from "./ImagesAndCTA.module.sass";
import Card from "../../../components/Card";
import File from "../../../components/File";
import Dropdown from "../../../components/Dropdown";

const optionsPurchase = ["Purchase now", "Purchase tomorrow", "Buy later"];

const ImagesAndCTA = ({ className }) => {
  const [purchase, setPurchase] = useState(optionsPurchase[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Mon CV actuel"
      classTitle="title-blue"
    >
      <div className={styles.images}>
        <File
          className={styles.field}
          title="Télécharger votre CV"
          label="Tous les formats sont acceptés"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
        />
       
      </div>
    </Card>
  );
};

export default ImagesAndCTA;
