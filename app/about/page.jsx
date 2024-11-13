import Component from "@/components/commenComponents/Component";
import styles from "./about.module.css";

export const metadata = {
  title: "A propos Crox ",
  description: `Nos produits ont rapidement rencontré un vif succès auprès des consommateurs qui outre l'aspect ont retrouvé surtout dans nos produits une qualité gustative inégalée.
`,
};
const data = [
  {
    id: 1,
    description: `SOUFFLESNACKS a été créée en 2012 EN ALGERIE avec l'idée de proposer aux consommateurs des produits d'apéritifs innovants, sains, naturels, …bons.`,
    image: "/crox3.jpg",
    button: "Découvrez nos produits",
    direction: "right",
  },
  {
    id: 2,
    description: `Nos produits ont rapidement rencontré un vif succès auprès des consommateurs qui outre l'aspect ont retrouvé surtout dans nos produits une qualité gustative inégalée.`,
    image: "/crox1.jpg",
    button: "Découvrez nos produits",
    direction: "left",
  },
  {
    id: 3,
    description: `Encouragés par cet engouement, un atelier de fabrication de 1500m2 est mis en œuvre en 2017 à zeralda.`,
    image: "/crox7.jpg",
    button: "Découvrez nos produits",
    direction: "right",
  },
  {
    id: 4,
    description: `Depuis sa création, SOUFFLESNACKS met tout en œuvre pour maintenir un niveau d'excellence dans la fabrication de ses chips. , les technologies de transformation douces, un personnel qualifié sont autant de moyens qui contribuent à atteindre ces objectifs.
    L'innovation reste aussi au cœur de nos préoccupations,`,
    image: "/crox6.jpg",
    button: "Découvrez nos produits",
    direction: "left",
  },
];
export default function About() {
  return (
    <div className={styles.about}>
      {data.map((item, i) => (
        <Component key={i} data={item} />
      ))}
    </div>
  );
}
