import React from "react";
import style from "./Cashflow.module.css";
import Generatecashflow from "../../utils/Generatecashflow";

function Cashflow() {
  return (
    <div className={style.cashflow__content}>
      <div className={style.upper__content}>
        <p>Cashflow</p>
        <>
          <button className={style.Average__cashflow}>Average: 15993.03</button>
        </>
        <div className={style.sort__graph}>
          <label htmlFor="sort_btn">Sort by:</label>
          <select name="sort_data" id={style.sort_btn}>
            <option value="Day">Day</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </select>
        </div>
      </div>
      <div className={style.bargraph__content}>
        <Generatecashflow />
      </div>
    </div>
  );
}

export default Cashflow;
