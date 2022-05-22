import React from "react";
import cn from "classnames";
import styles from "./Users.module.sass";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const users = [
  {
    title: "Dana",
    avatar: "/images/content/avatar.jpg",
    url: "/message-center",
  },
  {
    title: "Arthur",
    avatar: "/images/content/avatar-1.jpg",
    url: "/message-center",
  },
  {
    title: "Oumaima",
    avatar: "/images/content/avatar-2.jpg",
    url: "/message-center",
  },
];

const Users = ({ className }) => {
  return (
    <div className={cn(styles.users, className)}>
      <div className={styles.head}>
        <div className={styles.info}>
        Bienvenue à <strong>36 utilisateurs</strong> avec un message personnel{" "}
          <span role="img" aria-label="smile">
            😎
          </span>
        </div>
        <Link
          className={cn("button-stroke", styles.button)}
          to="/message-center"
        >
          Envoyer<span> message</span>
        </Link>
      </div>
      <div className={styles.list}>
        {users.map((x, index) => (
          <Link className={styles.item} key={index} to={x.url}>
            <div className={styles.avatar}>
              <img src={x.avatar} alt="Avatar" />
            </div>
            <div className={styles.title}>{x.title}</div>
          </Link>
        ))}
        <Link className={styles.all} to="/customers/customer-list">
          <div className={styles.icon}>
            <Icon name="arrow-right" size="24" />
          </div>
          <div className={styles.text}>Voir tout</div>
        </Link>
      </div>
    </div>
  );
};

export default Users;
