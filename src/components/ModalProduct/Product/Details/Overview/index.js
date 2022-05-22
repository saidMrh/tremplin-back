import React, { useState } from "react";
import cn from "classnames";
import styles from "./Overview.module.sass";
import Icon from "../../../../Icon";
import ModalPreview from "../../../../ModalPreview";

const gallery = [
  "/images/content/photo-1.jpg",
  "/images/content/photo-2.jpg",
  "/images/content/photo-1.jpg",
  "/images/content/photo-2.jpg",
];

const features = [
  "30 sociétés présentes",
  "150 élèves",
  "Le 20 Juin",
  "Stade Charlety",
];

const Overview = () => {
  const [visibleModalPreview, setVisibleModalPreview] = useState(false);

  return (
    <>
      <div className={styles.overview}>
        <div className={cn("h4", styles.title)}>
          Conférence Tremplin handicap
        </div>
        <div className={styles.info}>
        Ouverte à tous, cette conférence s’adresse particulièrement aux lycéens en situation de handicap
        </div>
        <div className={styles.line}>
          <div className={styles.author}>
            <div className={styles.avatar}>
              <img src="/images/content/avatar-2.jpg" alt="Avatar 8" />
            </div>
            Par <span>Oumaima D.</span>
          </div>
          <div className={styles.rating}>
            <Icon name="star-fill" size="24" />
            4.8
            <span className={styles.counter}>(87)</span>
          </div>
        </div>
        <div className={styles.gallery}>
          {gallery.map(
            (x, index) =>
              index < 1 && (
                <div className={styles.preview} key={index}>
                  <img src={x} alt="Product 9" />
                </div>
              )
          )}
          <button
            className={cn("button-white", styles.button)}
            onClick={() => setVisibleModalPreview(true)}
          >
            Show all preview
          </button>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn("title-red", styles.subtitle)}>En quelques mots</div>
            <div className={styles.content}>
              <p>
              Pour répondre à cette question, nous donnerons la parole aux représentants de la CGE (Conférence des Grandes Écoles) et de la CPU (Conférence des Présidents des Universités).
Vous pourrez également échanger avec des étudiants handicapés en Grande Ecole et en Université sur leur quotidien, leur vision et leur choix d’études supérieures. Cette conférence sera aussi l’occasion d’interroger des lycéens en situation de handicap : comment se projettent-ils – ou non – dans une poursuite d’études après leur BAC ?


              </p>
              <p>
              Ouverte à tous, cette conférence s’adresse particulièrement aux lycéens en situation de handicap, à leurs professeurs, aux administratifs des lycées, aux conseillers d’orientation, aux représentants académiques.

              </p>
              <p>
              Rendez-vous le Samedi 4 Juin, au Stade Charléty, en salle de presse du Comité Olympique à 15h30.

              </p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={cn("title-purple", styles.subtitle)}>Features</div>
            <ul className={styles.features}>
              {features.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ModalPreview
        visible={visibleModalPreview}
        onClose={() => setVisibleModalPreview(false)}
        gallery={gallery}
        title="Fleet - Travel shopping UI design kit"
        figcaption="Elegant product mockup for your next project"
        download
      />
    </>
  );
};

export default Overview;
