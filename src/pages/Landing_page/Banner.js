import React from "react";
import banner_img from "../../assets/asd.png";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${banner_img})`,
      }}
    >
      <div className={styles.banner__contents}>
        <h1 className={styles.banner__title}>
          All Your Household
          <br /> Expenditures Simplified
        </h1>

        <p className={styles.banner__motto}>
          Managing, Analyzing, and Recommending
        </p>

        <p className={styles.banner__description}>
          We help you group your finanical condition based <br /> on your
          household expenses.
        </p>

        <div className={styles.banner__buttons}>
          <button className={styles.banner__button}>
            <p>
              Get Started <i className={`${styles.arrow} ${styles.right}`}></i>
            </p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
