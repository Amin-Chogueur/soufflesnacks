"use client";
import Image from "next/image";
import styles from "./gammes.module.css";
import { productsData } from "@/db/db";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Gammes() {
  const [data, setData] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  function handleClick(type) {
    setData((pre) => type);
  }
  return (
    <div ref={ref} className={styles.gammes}>
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
          className={data === "potato" ? styles.activeButton : ""}
          onClick={() => handleClick("potato")}
        >
          Potato
        </button>
        <button
          className={data === "rippled" ? styles.activeButton : ""}
          onClick={() => handleClick("rippled")}
        >
          Rippled
        </button>
      </div>

      <div className={styles.categories}>
        {data === "all"
          ? productsData.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: i * 0.5 }}
              >
                <Image
                  key={i}
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.category}
                />
              </motion.div>
            ))
          : productsData
              .filter((product) => product.category === data)
              .map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.5 }}
                >
                  <Image
                    key={i}
                    src={product.image}
                    width={300}
                    height={300}
                    alt={product.category}
                  />
                </motion.div>
              ))}
      </div>
    </div>
  );
}

export default Gammes;
