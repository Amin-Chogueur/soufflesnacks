"use client";
import Image from "next/image";
import styles from "./component.module.css";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function Component({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className={
        data.direction === "left" ? styles.leftContainer : styles.rightContainer
      }
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start off-screen (left)
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animate in when in view
        transition={{ duration: 2 }}
        className={styles.imageContainer}
      >
        <div>
          <div className={styles.imgWrapper}>
            <Image src={data.image} width={500} height={600} alt={"image"} />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Start off-screen (right)
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Animate in when in view
        transition={{ duration: 2 }}
        className={styles.content}
      >
        <div>
          <p>{data.description}</p>
          <Link href={"/gammes"}>{data.button} &rarr;</Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Component;
