import React, { useState } from "react";
import styles from "./MessageCenter.module.sass";
import cn from "classnames";
import Users from "./Users";
import Messages from "./Messages";

const navigation = [
  {
    title: "Notre chat",
    icon: "profile-circle",
  },
  {
    title: "Notifications",
    icon: "lightning",
  },
];

const actions = [
  {
    title: "Mark as read",
    icon: "check",
    action: () => console.log("Mark as read"),
  },
  {
    title: "Delete message",
    icon: "trash",
    action: () => console.log("Delete message"),
  },
];

const parameters = [
  {
    title: "élève depuis",
    content: "Sep 2021",
  },
  {
    title: "Il a postulé à",
    content: "15 emplois",
  },
  {
    title: "Il a été coaché à ",
    content: "3 reprises",
  },
];

const users = [
  {
    id: 0,
    man: "Arthur Le pianiste",
    avatar: "/images/content/avatar-1.jpg",
    time: "03:30PM",
    content: "J'ai une question",
    new: true,
    online: false,
  },
  {
    id: 1,
    man: "Oumaima DIDI",
    avatar: "/images/content/avatar-2.jpg",
    time: "11:59AM",
    content: "Avez-vous la liste de stages",
    new: false,
    online: true,
  },
  {
    id: 2,
    man: "Tanguy LAPEYRE",
    avatar: "/images/content/avatar-3.jpg",
    time: "09:30AM",
    content: "Je cherche une alternance",
    new: true,
    online: false,
  },
  {
    id: 3,
    man: "Sabrina AMAROUCHE",
    avatar: "/images/content/avatar-4.jpg",
    time: "08:00AM",
    content: "Je peux m'inscrire à la conférence",
    new: false,
    online: false,
  },
  {
    id: 4,
    man: "Jade ZOUAOUI",
    avatar: "/images/content/avatar-5.jpg",
    time: "07:01AM",
    content: "Pour notre rendez-vous du 07",
    new: false,
    online: false,
  },
];

const messages = [
  {
    id: 0,
    man: "Arthur",
    avatar: "/images/content/avatar-1.jpg",
    time: "11:59AM",
    content:
      "J'ai une question concernant les stages d'été, pourrais-je m'inscrire encore ? ",
  },
  {
    id: 1,
    man: "Dana",
    avatar: "/images/content/avatar.jpg",
    time: "11:59AM",
    content:
      'Bonjour Arthur, <br/><br/>Grâce notre portail Hackaccess, vous pouvez vous inscrire sur le lien suivant: <a href="http://www.tremplin-handicap.fr/" target="_blank" rel="noopener noreferrer">http://www.tremplin-handicap.fr/</a><br></br>Je reste à votre disposition pour tout complément d\'information. <span role="img" aria-label="pray">🙌</span><br> Regards,<br></br>Br',
  },
];

const MessageCenter = () => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <div className={cn(styles.wrapper, { [styles.active]: visible })}>
      <Users
        className={styles.users}
        navigation={navigation}
        items={users}
        setVisible={setVisible}
        search={search}
        setSearch={setSearch}
        onSubmit={() => handleSubmit()}
      />
      <Messages
        className={styles.messages}
        visible={visible}
        setVisible={setVisible}
        actions={actions}
        parameters={parameters}
        messages={messages}
      />
    </div>
  );
};

export default MessageCenter;
