import Image from "next/image";
import styles from "./home.module.css";
import Hero from "@/components/hero/Hero";
import Component from "@/components/commenComponents/Component";
const data = [
  {
    id: 1,
    description: `Notre savoir-faire repose sur des méthodes de production modernes et
          respectueuses de l’environnement, alliant innovation et respect des
          traditions artisanales. Chaque produit que nous offrons reflète notre
          passion pour l'excellence et notre volonté de satisfaire les palais
          les plus exigeants.`,
    image: "/crox2.jpg",
    direction: "left",
    button: "Découvrez nos produits",
  },
  {
    id: 2,
    description: ` Chez SOUFFLESNACKS, nous croyons que la qualité ne doit jamais être
        compromise, c'est pourquoi nous investissons dans des solutions durables
        et dans l'optimisation continue de nos processus de fabrication.`,
    image: "/crox5.jpg",
    direction: "right",
    button: "Découvrez nos produits",
  },
];

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Component data={data[0]} />
      <Component data={data[1]} />
      <p></p>
    </main>
  );
}
