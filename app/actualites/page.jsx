"use client";
import styles from "./actualités.module.css";
import FacebookPage from "@/components/facebook/FacebookPage";

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
        <FacebookPage />
      </div>
    </div>
  );
}

export default Actualités;
