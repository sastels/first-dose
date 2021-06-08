import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const chartDataFullyVaccinated = (data, country, population) => {
  const country_data = data[country] || {};
  var munged = [];
  for (const key in country_data) {
    if (country_data[key] !== null) {
      const x = country_data[key];
      munged.push([x.date, (x.peopleFullyVaccinated * 100) / population]);
    }
  }
  return munged;
};

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
        data: chartDataFullyVaccinated(data, "Israel", 8652167),
      },
      {
        name: "United Kingdom",
        data: chartDataFullyVaccinated(data, "United Kingdom", 67893379),
      },
      {
        name: "United States",
        data: chartDataFullyVaccinated(data, "United States", 334438269),
      },
      {
        name: "Canada",
        data: chartDataFullyVaccinated(data, "Canada", 37746527),
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default FullyVaccinatedChart;
