import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./NameAndDescription.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import TextInput from "../../../components/TextInput";
import Editor from "../../../components/Editor";

const NameAndDescription = ({ className }) => {
  const [content, setContent] = useState();

  return (
    <Card
      className={cn(styles.card, className)}
      title="Votre profile"
      classTitle="title-green"
      head={
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/products/dashboard"
        >
          <Icon name="arrow-left" size="24" />
          <span>Back</span>
        </Link>
      }
    >
      <div className={styles.description}>
        <TextInput
          className={styles.field}
          label="Titre"
          name="title"
          type="text"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <Editor
          state={content}
          onChange={setContent}
          classEditor={styles.editor}
          label="Présentation rapide"
          tooltip="Description"
        />
        <div className={styles.group}>
          <TextInput
            className={styles.field}
            label="Compétences clés"
            name="value1"
            type="text"
            placeholder="Value"
            tooltip="Maximum 100 characters. No HTML or emoji allowed"
            required
          />
          <TextInput
            className={styles.field}
            name="value2"
            type="text"
            placeholder="Value"
            required
          />
          <TextInput
            className={styles.field}
            name="value3"
            type="text"
            placeholder="Value"
            required
          />
          <TextInput
            className={styles.field}
            name="value4"
            type="text"
            placeholder="Value"
            required
          />
        </div>
      </div>
    </Card>
  );
};

export default NameAndDescription;
