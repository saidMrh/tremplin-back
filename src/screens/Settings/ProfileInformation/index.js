import React, { useState } from "react";
import cn from "classnames";
import styles from "./ProfileInformation.module.sass";
import Item from "../Item";
import Icon from "../../../components/Icon";
import TextInput from "../../../components/TextInput";
import Editor from "../../../components/Editor";

const ProfileInformation = ({ className }) => {
  const [content, setContent] = useState();

  return (
    <Item
      className={cn(styles.card, className)}
      title="Informations sur le profil"
      classTitle="title-green"
    >
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src="/images/content/avatar.jpg" alt="Avatar" />
          <button className={styles.remove}>
            <Icon name="close" />
          </button>
        </div>
        <div className={styles.file}>
          <input type="file" />
          <button className={cn("button", styles.button)} type="button">
            <Icon name="add" size="24" />
            <span>Télécharger une nouvelle image</span>
          </button>
        </div>
        <button className={cn("button-stroke", styles.button)}>Supprimer</button>
      </div>
      <div className={styles.fieldset}>
        <TextInput
          className={styles.field}
          label="Nom et prénom"
          name="display-name"
          type="text"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <TextInput
          className={styles.field}
          label="Email"
          name="email"
          type="email"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <TextInput
          className={styles.field}
          label="Emplacement"
          name="location"
          type="text"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          required
        />
        <Editor
          state={content}
          onChange={setContent}
          classEditor={styles.editor}
          label="Bio"
          tooltip="Description"
        />
      </div>
    </Item>
  );
};

export default ProfileInformation;
