import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { chartData } from "./mungingUtils";

function FullyVaccinatedChart(data) {
  const options = {
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
      },
    },
    tooltip: {
      shared: true,
      formatter: function () {
        var yourDate = new Date(this.x);
        const offset = yourDate.getTimezoneOffset();
        yourDate = new Date(yourDate.getTime() + offset * 60 * 1000);
        const date = yourDate.toISOString().split("T")[0];
        var retval = date + "<br>";
        retval += this.points
          .map((x) => `${x.series.name}: ${x.y.toFixed(1)}%`)
          .join("<br>");
        return retval;
      },
    },
    chart: {
      zoomType: "x",
    },
    title: {
      text: "Fully Vaccinated",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: [
      {
        title: {
          text: "Percentage covered",
        },
      },
      {
        title: {
          text: " ",
        },
        linkedTo: 0,
        opposite: true,
      },
    ],
    series: [
      {
        name: "Israel",
        data: chartData(data, "peopleFullyVaccinated", "Israel", 8652167),
      },
      {
        name: "United Kingdom",
        data: chartData(
          data,
          "peopleFullyVaccinated",
          "United Kingdom",
          67893379
        ),
      },
      {
        name: "United States",
        data: chartData(
          data,
          "peopleFullyVaccinated",
          "United States",
          334438269
        ),
      },
      {
        name: "Canada",
        data: chartData(data, "peopleFullyVaccinated", "Canada", 37746527),
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default FullyVaccinatedChart;
