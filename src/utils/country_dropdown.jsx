import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import styles from "../pages/Sign_up/sign_up.module.css";

function country_dropdown() {
  return <CountryDropdown required id={styles._selectbtn} />;
}

export default country_dropdown;
