import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Notification.module.sass";
import Icon from "../../Icon";
import Actions from "../../Actions";
import Item from "./Item";

// data
import { notifications } from "../../../mocks/notifications";

const actions = [
  {
    title: "Mark as read",
    icon: "check",
    action: () => console.log("Mark as read"),
  },
  {
    title: "Delete notifications",
    icon: "trash",
    action: () => console.log("Delete notifications"),
  },
];

const Notification = ({ className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(styles.notification, className, {
          [styles.active]: visible,
        })}
      >
        <button
          aria-label="nofits"
          className={cn('Btn 3', styles.head, styles.active)}
          onClick={() => setVisible(!visible)}
        > H
          <Icon name="notification" size="24" />
        </button>
        <div className={styles.body}>
          <div className={styles.top}>
            <div className={styles.title}>Notification</div>
            <Actions
              className={styles.actions}
              classActionsHead={styles.actionsHead}
              items={actions}
              small
            />
          </div>
          <div className={styles.list}>
            {notifications.map((x, index) => (
              <Item
                className={cn(styles.item, className)}
                item={x}
                key={index}
                onClose={() => setVisible(false)}
              />
            ))}
          </div>
          <Link
            className={cn("button", styles.button)}
            to="/notification"
            onClick={() => setVisible(false)}
          >
            See all notifications
          </Link>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Notification;
