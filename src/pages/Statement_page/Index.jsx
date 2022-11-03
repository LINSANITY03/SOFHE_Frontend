import React from "react";
import Navbar from "../Calender_page/Navbar_new";
import Sidebar from "../Calender_page/Sidebar_new";
import ActionAreaCard from "./Card.tsx";
import CardData from "./CardData.tsx";
import "./Index.scss";

function Index() {
  return (
    <div className="body__content">
      <Sidebar />
      <div className="right__hand">
        <Navbar page_name="Statement" />
        <div className="card__content">
          {CardData.map((item, index) => {
            return <ActionAreaCard item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
