import styles from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h2>SOUFFLESNACKS</h2>
        <p>
          Bienvenue chez SOUFFLESNACKS ! Découvrez des chips croquantes et
          savoureuses, faites avec passion en Algérie. À la recherche de
          nouvelles saveurs ? Nos produits allient qualité, naturalité et
          innovation pour des moments de plaisir irrésistibles à partager.
          Succombez à l`excellence SOUFFLESNACKS dès aujourd`hui !
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={"/croxBg.jpg"} width={500} height={500} alt={"logo"} />
      </div>
    </div>
  );
}

export default Hero;
