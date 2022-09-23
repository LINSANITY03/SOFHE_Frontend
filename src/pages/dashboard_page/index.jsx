import React from "react";
import Sidebar from "../../components/sidebar.jsx";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar.jsx";
import Cashflow from "./Cashflow.jsx";
import FinancialRecord from "./FinancialRecord.jsx";
import Expenses from "./Expenses.jsx";

function index() {
  return (
    <div className={styles.dashboard__contents}>
      <Sidebar />
      <div className={styles.body__content}>
        <Navbar />
        <Cashflow />
        <div className={styles.lower__body}>
          <FinancialRecord />
          <Expenses />
        </div>
      </div>
    </div>
  );
}

export default index;
