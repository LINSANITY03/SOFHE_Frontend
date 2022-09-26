import React from "react";
import GeneratePieChart from "../../utils/GeneratePieChart";
import styles from "./Expenses.module.css";

function Expenses() {
  return (
    <div className={styles.body__content}>
      <div className={styles.header__content}>
        <p>Expenses</p>
        <p>From 1 - 15 Jun 2022</p>
      </div>
      <div className={styles.pie__chart}>
        <GeneratePieChart />
      </div>
    </div>
  );
}

export default Expenses;
