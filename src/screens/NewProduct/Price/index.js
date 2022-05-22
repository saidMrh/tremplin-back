import React, { useState } from "react";
import cn from "classnames";
import styles from "./Price.module.sass";
import Card from "../../../components/Card";
import Tooltip from "../../../components/Tooltip";
import TextInput from "../../../components/TextInput";
import Switch from "../../../components/Switch";

const Price = ({ className }) => {
  const [resolution, setResolution] = useState(true);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Coordonnées"
      classTitle="title-green"
    >
      <div className={styles.price}>
        <TextInput
          className={styles.field}
          label="Années d'expérience"
          name="amount"
          type="text"
          tooltip="Small description"
          required
        />
        <div className={styles.line}>
          <div className={styles.info}>
            Permettez aux clients de payer comme ils veulent{" "}
            <Tooltip
              className={styles.tooltip}
              title="Maximum 100 characters. No HTML or emoji allowed"
              icon="info"
              place="top"
            />
          </div>
          <Switch
            className={styles.switch}
            value={resolution}
            onChange={() => setResolution(!resolution)}
          />
        </div>
        <div className={styles.fieldset}>
          <TextInput
            className={styles.field}
            classLabel={styles.label}
            label="Montant minimal"
            name="minimum-amount"
            type="text"
            required
            currency="$"
          />
          <TextInput
            className={styles.field}
            classLabel={styles.label}
            label="Montant suggéré"
            name="suggested-amount"
            type="text"
            required
            currency="$"
          />
        </div>
      </div>
    </Card>
  );
};

export default Price;
