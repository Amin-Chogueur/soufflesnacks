"use client";
import styles from "./hero.module.css";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        } // Change animation based on isInView
        transition={{ duration: 2 }}
        className={styles.content}
      >
        <div>
          <h2>SOUFFLESNACKS</h2>
          <p>
            Bienvenue chez SOUFFLESNACKS ! Découvrez des chips croquantes et
            savoureuses, faites avec passion en Algérie. À la recherche de
            nouvelles saveurs ? Nos produits allient qualité, naturalité et
            innovation pour des moments de plaisir irrésistibles à partager.
            Succombez à l`excellence SOUFFLESNACKS dès aujourd`hui !
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        } // Change animation based on isInView
        transition={{ duration: 2 }}
        className={styles.imageContainer}
      >
        <div>
          <Image src={"/croxBg.jpg"} width={500} height={500} alt={"logo"} />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
