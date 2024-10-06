"use client";
import styles from "./actualités.module.css";
import FacebookPage from "@/components/facebook/FacebookPage";
import Image from "next/image";
import Link from "next/link";
function Actualités() {
  function refrechPage() {
    window.location.reload();
  }

  return (
    <div className={styles.actualite}>
      <h2 onClick={refrechPage}>
        Cliquez et Suivez-nous sur Facebook pour voir les derniers événements !
      </h2>
      <div className={styles.facebook}>
        <div className={styles.facebookSite}>
          <FacebookPage />
        </div>
        <div className={styles.facebookImage}>
          <Link
            href="https://www.facebook.com/CroxMaxChips?ref=embed_page"
            target="_blank"
            passHref
          >
            <Image
              src="/facebook.png"
              alt="facebook"
              width={340}
              height={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Actualités;
