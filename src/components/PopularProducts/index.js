import React, { useState } from "react";
import cn from "classnames";
import styles from "./PopularProducts.module.sass";
import { Link } from "react-router-dom";
import Card from "../Card";
import ModalProduct from "../ModalProduct";

const products = [
  {
    title: "Raid Essec EY 2016",
    price: "10/06/22",
    active: true,
    image: "/images/content/raid.jpg",
    image2x: "/images/content/product-pic-1@2x.jpg",
  },
  {
    title: "Samedi 12 Mars: Journée « Autour des DYS »",
    price: "25/05/22",
    active: "Date Début",
    image: "/images/content/samedi.jpg",
    image2x: "/images/content/calendar.svg",
  },
  {
    title: "Sensibilisation à l’EPSI Lyon",
    price: "09/08/22",
    active: true,
    image: "/images/content/lyon.jpg",
    image2x: "/images/content/product-pic-3@2x.jpg",
  },
  // {
  //   title: "Fleet - travel shopping kit",
  //   price: "$648.60",
  //   active: true,
  //   image: "/images/content/product-pic-4.jpg",
  //   image2x: "/images/content/product-pic-4@2x.jpg",
  // },
  // {
  //   title: "Crypter - NFT UI kit",
  //   price: "$2,453.80",
  //   active: true,
  //   image: "/images/content/product-pic-5.jpg",
  //   image2x: "/images/content/product-pic-5@2x.jpg",
  // },
  // {
  //   title: "Bento Matte 3D illustration 1.0",
  //   price: "$105.60",
  //   active: false,
  //   image: "/images/content/product-pic-2.jpg",
  //   image2x: "/images/content/product-pic-2@2x.jpg",
  // },
  // {
  //   title: "Fleet - travel shopping kit",
  //   price: "$648.60",
  //   active: true,
  //   image: "/images/content/product-pic-3.jpg",
  //   image2x: "/images/content/product-pic-3@2x.jpg",
  // },
  // {
  //   title: "Fleet - travel shopping kit",
  //   price: "$648.60",
  //   active: true,
  //   image: "/images/content/product-pic-4.jpg",
  //   image2x: "/images/content/product-pic-4@2x.jpg",
  // },
];

const PopularProducts = ({ className, views }) => {
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Les derniers évènements"
        classTitle="title-blue"
      >
        <div className={styles.popular}>
          <div className={styles.head}>
            <div className={styles.stage}>évènements</div>
            <div className={styles.stage}>date d'événement</div>
          </div>
          <div className={styles.list}>
            {products.map(
              (x, index) =>
                views > index && (
                  <div
                    className={styles.item}
                    key={index}
                    onClick={() => setVisibleModalProduct(true)}
                  >
                    <div className={styles.preview}>
                      <img
                        width={30}
                        height={30}
                        src={x.image}
                        alt="Product"
                      />
                    </div>
                    <div className={styles.title}>{x.title}</div>
                    <div className={styles.details}>
                      <div className={styles.price}>{x.price}</div>
                      {x.active ? (
                        <div className={cn("status-green", styles.status)}>
                          Active
                        </div>
                      ) : (
                        <div className={cn("status-red", styles.status)}>
                          Deactive
                        </div>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/products/dashboard"
          >
            Tous les évènements
          </Link>
        </div>
      </Card>
      <ModalProduct
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      />
    </>
  );
};

export default PopularProducts;
