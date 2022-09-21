import React from "react";
import styles from "./Body.module.css";

function Body() {
  return (
    <div>
      <div className={styles.body__contents}>
        <h1 className={styles.body__title}>Why use Sofhe</h1>
        <div className={styles.body__grid}>
          <div className={styles.content__first}>
            <h2 className={styles.title}>Indiviual Expenses</h2>
            <p className={styles.description}>
              Users who wish to manage and <br /> analyze the budget.
            </p>
          </div>
          <div className={styles.content__second}>
            <h2 className={styles.title}>Family Expenses</h2>
            <p className={styles.description}>
              Family focusing forward to <br /> making a financial decision
            </p>
          </div>
          <div className={styles.content__third}>
            <h2 className={styles.title}>Small Business Expenses</h2>
            <p className={styles.description}>
              Establish transparent financial <br /> reporting and audit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
