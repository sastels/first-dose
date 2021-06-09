import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const chartData = (data, dataField, area, population) => {
  const country_data = data[area] || {};
  var munged = [];
  for (const key in country_data) {
    if (country_data[key] !== null) {
      const x = country_data[key];
      if (x.date >= 1608422400000) {
        // 2020-12-19
        munged.push([x.date, (x[dataField] * 100) / population]);
      }
    }
  }
  return munged;
};

function LocalFirstDoseChart(data) {
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
      text: "First Dose Coverage",
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
        name: "Ontario",
        data: chartData(data, "peopleVaccinated", "Ontario", 14745040),
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default LocalFirstDoseChart;
