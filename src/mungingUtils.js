const chartData = (
  data,
  dataField,
  area,
  population,
  startDate = 1608422400000, // 2020-12-20
  scale = 100
) => {
  const country_data = data[area] || {};
  var munged = [];
  for (const key in country_data) {
    if (country_data[key] !== null) {
      const x = country_data[key];
      if (x.date >= startDate) {
        munged.push([x.date, (x[dataField] * scale) / population]);
      }
    }
  }
  return munged;
};

exports.chartData = chartData;
