import Image from "next/image";
import styles from "./component.module.css";
import Link from "next/link";
function Component({ data }) {
  return (
    <div
      className={
        data.direction === "left" ? styles.leftContainer : styles.rightContainer
      }
    >
      <div className={styles.imageContainer}>
        <div className={styles.imgWrapper}>
          <Image src={data.image} width={500} height={600} alt={"image"} />
        </div>
      </div>
      <div className={styles.content}>
        <p>{data.description}</p>
        <Link href={"/gammes"}>{data.button} &rarr;</Link>
      </div>
    </div>
  );
}

export default Component;
