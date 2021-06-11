import "./Tables.css";

const DoseTable = (props) => {
  const { data, keys, population } = props;

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>First Dose</th>
          <th>Fully Vaccinated</th>
        </tr>
      </thead>
      <tbody>
        {keys
          .sort(
            (a, b) =>
              data[a] &&
              data[b] &&
              data[a].slice(-1)[0].peopleVaccinated / population[a] <
                data[b].slice(-1)[0].peopleVaccinated / population[b]
          )
          .map(
            (key) =>
              data[key] && (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    {(
                      (data[key].slice(-1)[0].peopleVaccinated * 100) /
                      population[key]
                    ).toFixed(1)}{" "}
                    %
                  </td>
                  <td>
                    {(
                      (data[key].slice(-1)[0].peopleFullyVaccinated * 100) /
                      population[key]
                    ).toFixed(1)}{" "}
                    %
                  </td>
                </tr>
              )
          )}
      </tbody>
    </table>
  );
};

export default DoseTable;
