import React from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

export default function MyChart() {
  const state = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57],
      },
      // {
      //   name: "Revenue",
      //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      // },
      // {
      //   name: "Free Cash Flow",
      //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      // },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [2020, 2021, 2022],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="bar"
      height={350}
    />
  );
}
