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
    height: 100,
    minheight: 100,
    width: 100,
    toolbar: {
      show: false,
    },
    colors: ["#E10D27"],
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: ["#E10D27"],
    opacity: 0.5,
  },
  grid: {
    show: false,

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
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={100}
      width={200}
    />
  );
}

export default IncomeExpenses;
