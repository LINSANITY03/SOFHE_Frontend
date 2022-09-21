import React from "react";
import Sidebar from "../../components/sidebar.jsx";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar.jsx";
import Cashflow from "./Cashflow.jsx";

function index() {
  return (
    <div className={styles.dashboard__contents}>
      <Sidebar />
      <div className={styles.body__content}>
        <Navbar />
        <Cashflow />
      </div>
    </div>
  );
}

export default index;
