import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import sofha_logo from "../../assets/sofhe.png";

function Footer() {
  return (
    <footer>
      <div className={styles.footer__contents}>
        <div className={styles.left__hand}>
          <div className={styles.social}>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          <div className={styles.download__button}>
            <button className={styles.google__play}>
              <div className={styles.google__text}>
                <p className={styles.text__google}>
                  Get it on <br /> Google Play
                </p>
              </div>
              <FontAwesomeIcon
                icon={faGooglePlay}
                size="2x"
                bounce
                style={{
                  color: "#376C43",
                }}
              />
            </button>
          </div>
        </div>
        <div className={styles.right__hand}>
          <img src={sofha_logo} alt="Sofhe" className={styles.logo__footer} />
          <div className={styles.support}>
            <h2 className={styles.info__title}>Support</h2>
            <p className={styles.info__options}>Help</p>
            <p className={styles.info__options}>Contact</p>
          </div>
          <div className={styles.about_us}>
            <h2 className={styles.info__title}>About Us</h2>
            <p className={styles.info__options}>Sofhe</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          Copyright © 2022 sofhe.
          <span style={{ color: "white" }}> Terms & Condition</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
