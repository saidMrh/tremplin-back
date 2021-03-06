import React, { useState } from "react";
import styles from "./Sidebar.module.sass";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import Icon from "../Icon";
import Theme from "../Theme";
import Dropdown from "./Dropdown";
import Help from "./Help";
import Image from "../Image";

const navigation = [
  {
    title: "Mon espace",
    icon: "home",
    url: "/",
  },
  {
    title: "Évènements",
    slug: "Actualités",
    icon: "schedule",
    // add: true,
    dropdown: [
      {
        title: "Tableau de bord",
        url: "/products/dashboard",
      },
      // {
      //   title: "Drafts",
      //   url: "/products/drafts",
      //   counter: "2",
      //   colorCounter: "#FFBC99",
      // },
      {
        title: "Actualités",
        url: "/products/released",
      },
      // {
      //   title: "Comments",
      //   url: "/products/comments",
      // },
      // {
      //   title: "Scheduled",
      //   url: "/products/scheduled",
      //   counter: "8",
      //   colorCounter: "#B5E4CA",
      // },
    ],
  },
  {
    title: "Utilisateurs",
    slug: "customers",
    icon: "profile-circle",
    dropdown: [
      {
        title: "Tableau de bord",
        url: "/customers/overview",
      },
      {
        title: "Liste des utilisateurs",
        url: "/customers/customer-list",
      },
    ],
  },
  {
    title: "Nos entreprises",
    icon: "leaderboard",
    dropdown: [
      {
        title: "Earning",
        url: "/income/earning",
      },
      {
        title: "Refunds",
        url: "/income/refunds",
      },
      {
        title: "Payouts",
        url: "/income/payouts",
      },
      {
        title: "Statements",
        url: "/income/statements",
      },
    ],

  },
  {
    title: "Nos écoles",
    slug: "income",
    icon: "store",
    dropdown: [
      {
        title: "Earning",
        url: "/income/earning",
      },
      {
        title: "Refunds",
        url: "/income/refunds",
      },
      {
        title: "Payouts",
        url: "/income/payouts",
      },
      {
        title: "Statements",
        url: "/income/statements",
      },
    ],
  },
  {
    title: "Nos formations",
    icon: "promotion",
    url: "/promote",
  },
];

const Sidebar = ({ className, onClose }) => {
  const [visibleHelp, setVisibleHelp] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={cn(styles.sidebar, className, { [styles.active]: visible })}
      >
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size="24" />
        </button>
        <Link className={styles.logo} to="/" onClick={onClose}>
          <Image
            className={styles.pic}
            src="/images/logo-dark.png"
            srcDark="/images/logo-light.png"
            alt="Core"
          />
        </Link>
        <div className={styles.menu}>
          {navigation.map((x, index) =>
            x.url ? (
              <NavLink
                className={styles.item}
                activeClassName={styles.active}
                to={x.url}
                key={index}
                exact
                onClick={onClose}
              >
                <Icon name={x.icon} size="24" />
                {x.title}
              </NavLink>
            ) : (
              <Dropdown
                className={styles.dropdown}
                visibleSidebar={visible}
                setValue={setVisible}
                key={index}
                item={x}
                onClose={onClose}
              />
            )
          )}
        </div>
        <button className={styles.toggle} onClick={() => setVisible(!visible)}>
          <Icon name="arrow-right" size="24" /> <span style={{color: "white"}}>L</span>
          <Icon name="close" size="24" /> <span style={{color: "white"}}>L</span>
        </button>
        <div className={styles.foot}>
          <button className={styles.link} onClick={() => setVisibleHelp(true)}>
            <Icon name="help" size="24" />
            Aide & formation
            <div className={styles.counter}>8</div>
            <span style={{color: "white"}}>L</span> 
          </button>
          <Theme className={styles.theme} visibleSidebar={visible} />
        </div>
      </div>
      <Help
        visible={visibleHelp}
        setVisible={setVisibleHelp}
        onClose={onClose}
      />
      <div
        className={cn(styles.overlay, { [styles.active]: visible })}
        onClick={() => setVisible(false)}
      ></div>
    </>
  );
};

export default Sidebar;
