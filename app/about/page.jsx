import Component from "@/components/commenComponents/Component";
import styles from "./about.module.css";
const data = [
  {
    id: 1,
    description: `SOUFFLESNACKS a été créée en 2012 EN ALGERIE avec l'idée de proposer aux consommateurs des produits d'apéritifs innovants, sains, naturels, …bons. 
    Nos produits ont rapidement rencontré un vif succès auprès des consommateurs qui outre l'aspect ont retrouvé surtout dans nos produits une qualité gustative inégalée.`,
    image: "/crox3.jpg",
    button: "Découvrez nos produits",
    direction: "right",
  },
  {
    id: 2,
    description: `Encouragés par cet engouement, un atelier de fabrication de 1500m2 est mis en œuvre en 2017 à zeralda. Depuis sa création, SOUFFLESNACKS met tout en œuvre pour maintenir un niveau d'excellence dans la fabrication de ses
      chips.`,
    image: "/crox1.jpg",
    button: "Découvrez nos produits",
    direction: "left",
  },
  {
    id: 3,
    description: `les technologies de transformation douces, un personnel qualifié sont autant de moyens qui contribuent à atteindre ces objectifs.
    L'innovation reste aussi au cœur de nos préoccupations.`,
    image: "/crox6.jpg",
    button: "Découvrez nos produits",
    direction: "right",
  },
];
export default function About() {
  return (
    <div className={styles.about}>
      <Component data={data[0]} />
      <Component data={data[1]} />
      <Component data={data[2]} />
    </div>
  );
}
