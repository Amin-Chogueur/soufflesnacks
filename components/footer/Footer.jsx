import Image from "next/image";
import Link from "next/link";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.desc}>
          <Image
            src={"/croxLogo2.png"}
            width={240}
            height={240}
            alt={"footer-logo"}
          />
          <p>
            The European Snacks Association (ESA) is a 200-member strong trade
            group which represents the interests of international savoury snack
            manufacturers and suppliers to the industry.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.location}>
            <div>
              <h3>Siège social Alger</h3>
              <a
                href="https://www.google.dz/maps/search/ZONE+SECTION+4+ILOT+371+LOT+07,+Staoueli+Alger.ALGERIE/@36.7523532,2.8827141,16.5z?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <GiPositionMarker
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                />
                ZONE D`ACTIVITE SECTION 4 ILOT 371 LOT 07,
                <br />
                Staoueli Alger.
                <br />
                ALGERIE
              </a>
              <h3>Mail</h3>
              <a
                className={styles.phone}
                href="mailto: info@soufflesnacks.com "
              >
                <CiMail
                  style={{
                    display: "inline",
                    fontSize: "25px",
                    marginRight: "5px",
                  }}
                />
                info@soufflesnacks.com
              </a>
            </div>
          </div>
          <div className={styles.contact}>
            <h3>Tel</h3>
            <ul>
              <li>
                <a className={styles.phone} href="tel: 023 20 91 96">
                  <FaPhoneAlt
                    style={{
                      display: "inline",
                      fontSize: "20px",
                      marginRight: "5px",
                    }}
                  />
                  023 20 91 96
                </a>
              </li>
              <li>
                <a className={styles.phone} href="tel: 023 20 91 94">
                  <FaPhoneAlt
                    style={{
                      display: "inline",
                      fontSize: "20px",
                      marginRight: "5px",
                    }}
                  />
                  023 20 91 94
                </a>
              </li>
              <h3>Fax</h3>
              <li>
                <a className={styles.phone} href="tel:023 20 91 93">
                  <FaPhoneAlt
                    style={{
                      display: "inline",
                      fontSize: "20px",
                      marginRight: "5px",
                    }}
                  />
                  023 20 91 93
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        Copyright © 2024{" "}
        <strong>
          <Link href={"/"}>SARL SOUFFLE PLASTE</Link>
        </strong>
        . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
