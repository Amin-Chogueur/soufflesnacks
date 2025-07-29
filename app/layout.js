import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Crox - Saveur au naturel.",
  description: `Chez SOUFFLESNACKS, nous fabriquons des chips et snacks croustillants de haute qualité, faits à partir d'ingrédients naturels soigneusement sélectionnés. Nos produits sont élaborés pour offrir une expérience de dégustation unique, alliant goût authentique et respect de l'environnement grâce à nos pratiques de production écoresponsables. Que vous soyez amateur de chips classiques ou à la recherche de nouvelles saveurs, SOUFFLESNACKS propose une gamme variée de snacks savoureux pour satisfaire tous les goûts.
`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <div className={"mainDev"}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
