"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    id: 1,
    url: "/",
    label: "Accueil",
  },
  {
    id: 2,
    url: "/about",
    label: "A propos",
  },
  {
    id: 3,
    url: "/gammes",
    label: "Gammes",
  },

  {
    id: 4,
    url: "/qualite",
    label: "Charte qualité",
  },
  {
    id: 5,
    url: "/actualites",
    label: "Actualités",
  },
  {
    id: 6,
    url: "/contact",
    label: "Contact",
  },
];

function NavBar() {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLink, setShowLink] = useState(false);
  function handleShowLinks() {
    setShowLink((pre) => !pre);
  }
  function handleScroll() {
    if (window.scrollY >= 70) {
      setIsScrolled(true);
    }
    if (window.scrollY <= 70) {
      setIsScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.navBar} ${isScrolled ? styles.navBarBg : " "}`}>
      <h1>
        <Link href={"/"}>
          <Image src={"/croxLogo.png"} width={90} height={90} alt={"logo"} />
        </Link>
      </h1>
      <ul className={styles.links}>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <Link
                className={`${styles.link} ${
                  pathName === link.url && styles.active
                } ${
                  isScrolled && pathName === link.url && styles.activeLinkBarBg
                }`}
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {showLink ? (
        <div className={styles.closeBurger} onClick={handleShowLinks}>
          ✖
        </div>
      ) : (
        <HiBars3BottomRight
          onClick={handleShowLinks}
          className={styles.burgerMenu}
        />
      )}

      <ul className={`${styles.linksMobile} ${showLink ? styles.open : ""}`}>
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <Link
                onClick={() => setShowLink(false)}
                href={link.url}
                className={`${styles.link} ${
                  pathName === link.url && styles.active
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
