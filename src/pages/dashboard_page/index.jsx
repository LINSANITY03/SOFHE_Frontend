import React, { useState, useCallback } from "react";
import Sidebar from "../../components/Sidebar.jsx";
import styles from "./index.module.css";
import Navbar from "../../components/Navbar.jsx";
import Cashflow from "./Cashflow.jsx";
import FinancialRecord from "./FinancialRecord.jsx";
import Expenses from "./Expenses.jsx";

function Index() {
  const [sidebar, SetSidebar] = useState(false);

  const ShowSidebar = useCallback(() => {
    SetSidebar(!sidebar);
  }, [sidebar]);

  return (
    <div className={styles.dashboard__contents}>
      <Sidebar sidebar={sidebar} ShowSidebar={ShowSidebar} />
      <div className={sidebar ? styles.body__content : styles.body__change}>
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

export default Index;
