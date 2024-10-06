"use client";
import Image from "next/image";
import styles from "./gammes.module.css";
import { productsData } from "@/db/db";
import { useState } from "react";

function Gammes() {
  const [data, setData] = useState("all");
  function handleClick(type) {
    setData((pre) => type);
  }
  return (
    <div className={styles.gammes}>
      <h1>Nos gammes de produits</h1>
      <div className={styles.filters}>
        <button
          className={data === "all" ? styles.activeButton : ""}
          onClick={() => handleClick("all")}
        >
          Tous
        </button>

        <button
          className={data === "stix" ? styles.activeButton : ""}
          onClick={() => handleClick("stix")}
        >
          Stix
        </button>
        <button
          className={data === "tornados" ? styles.activeButton : ""}
          onClick={() => handleClick("tornados")}
        >
          Tornados
        </button>
        <button
          className={data === "rippled" ? styles.activeButton : ""}
          onClick={() => handleClick("rippled")}
        >
          Rippled
        </button>
        <button
          className={data === "potato" ? styles.activeButton : ""}
          onClick={() => handleClick("potato")}
        >
          Potato
        </button>
      </div>

      <div className={styles.categories}>
        {data === "all"
          ? productsData.map((product, i) => (
              <Image
                key={i}
                src={product.image}
                width={300}
                height={300}
                alt={product.category}
              />
            ))
          : productsData
              .filter((product) => product.category === data)
              .map((product, i) => (
                <Image
                  key={i}
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.category}
                />
              ))}
      </div>
    </div>
  );
}

export default Gammes;
