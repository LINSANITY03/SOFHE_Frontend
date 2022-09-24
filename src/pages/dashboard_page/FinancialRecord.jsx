import React from "react";
import styles from "./FinancialRecord.module.css";
import IncomeExpenses from "../../utils/IncomeExpenses";

function FinancialRecord() {
  return (
    <div className={styles.body__content}>
      <div className={styles.header__content}>
        <p>Financial Record</p>
        <p>Jun, 2022</p>
      </div>
      <div className={styles.row__body}>
        <div className={styles.income__content}>
          <div className={styles.top__part}>
            <p>Total Income</p>
          </div>
          <div className={styles.bar__graph}>
            <IncomeExpenses />
          </div>
          <div className="bottom__part">
            <p>100,000</p>
            <p>+17%</p>
          </div>
        </div>
        <div className={styles.expenses__content}>
          <div className={styles.top__part}>
            <p>Total Expenses</p>
          </div>
          <div className={styles.bar__graph}>asdasd</div>
          <div className="bottom__part">
            <p>100,000</p>
            <p>+17%</p>
          </div>
        </div>
        <div className={styles.saving__content}>
          <div className={styles.top__part}>
            <p>Total Saving</p>
          </div>
          <div className={styles.bar__graph}>asdasd</div>
          <div className="bottom__part">
            <p>100,000</p>
            <p>+17%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialRecord;
