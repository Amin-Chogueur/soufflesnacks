import Image from "next/image";
import styles from "./qualité.module.css";

export const metadata = {
  title: "La Qualite chez Crox ",
  description: `La qualité de nos chips est contrôlée en interne à chaque étape de la
  production mais aussi par un laboratoire externe qui vient
  régulièrement prélever des échantillons de manière aléatoire.
`,
};
function Qualite() {
  return (
    <div className={styles.quality}>
      <div className={styles.imageContainer}>
        <Image src={"/image.png"} width={800} height={400} alt={"logo"} />
      </div>
      <div className={styles.content}>
        <h2>Charte qualité</h2>
        <p>
          Nous attachons une attention toute particulière à la sélection et au
          contrôle de tous les ingredients que nous utilisons pour la
          fabrication de nos chips.
        </p>
        <p>
          Nos fournisseurs sont sélectionnés suivant des critères stricts et
          nous garantissent un niveau de qualité élevé et constant.
        </p>
        <p>
          La qualité de nos chips est contrôlée en interne à chaque étape de la
          production mais aussi par un laboratoire externe qui vient
          régulièrement prélever des échantillons de manière aléatoire.
        </p>
        <p>
          Un système de traçabilité a été mis en place. Des échantillons de
          chips et de chaque intrant sont conservés pendant 8 mois (DLUO + 2
          mois) afin de nous permettre d`effectuer toute recherche utile en cas
          de réclamations clients.
        </p>
        <p>
          Une attention particulière est portée aux rejets de production. Les
          déchets de parage sont compostés localement. Les autres déchets
          organiques sont en voie de valorisation.
        </p>
        <p>
          L`électricité est la seule énergie que nous utilisons pour alimenter
          notre ligne de production.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default Qualite;
