"use client";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./skeletom.module.css";

const FacebookPage = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    // Load the Facebook SDK script
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v14.0", // Replace with the latest version
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    setLoad(true);
  }, []);

  return (
    <div>
      {!load ? (
        <div className={styles.skeleton}></div>
      ) : (
        <div
          className="fb-page"
          data-href="https://www.facebook.com/CroxMaxChips?ref=embed_page" // Replace with your Facebook page URL
          data-tabs="timeline"
          data-width="340" // Adjust width as needed
          data-height="500" // Adjust height as needed
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>
      )}
    </div>
  );
};

export default FacebookPage;
