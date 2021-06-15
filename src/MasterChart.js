import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

function MasterChart(title, series, precision = 1, type = "percent") {
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
          .map(
            (x) =>
              `${x.series.name}: ${x.y.toFixed(precision)}` +
              (type === "percent" ? "%" : "")
          )
          .join("<br>");
        return retval;
      },
    },
    chart: {
      zoomType: "x",
    },
    title: {
      text: title,
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: [
      {
        title: {
          text: type === "percent" ? "Percentage covered" : "",
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
    series: series,
  };
  return (
    <div style={{ boxShadow: "0 0 3px #ddd" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default MasterChart;
