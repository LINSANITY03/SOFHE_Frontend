import Chart from "react-apexcharts";
import React from "react";

const series = [
  {
    name: "Desktops",
    data: [10, 41, 35],
  },
];

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    row: {
      colors: ["transparent"], // takes an array which will be repeated on columns
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar"],
    labels: {
      show: false,
    },
  },
  yaxis: {
    categories: ["10", "20", "30"],
    labels: {
      show: false,
    },
  },
};

function IncomeExpenses() {
  return <Chart options={options} series={series} type="area" height={100} />;
}

export default IncomeExpenses;
