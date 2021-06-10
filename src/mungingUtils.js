const chartData = (data, dataField, area, population) => {
  const country_data = data[area] || {};
  var munged = [];
  for (const key in country_data) {
    if (country_data[key] !== null) {
      const x = country_data[key];
      if (x.date >= 1608422400000) {
        // 2020-12-20
        munged.push([x.date, (x[dataField] * 100) / population]);
      }
    }
  }
  return munged;
};

exports.chartData = chartData;
