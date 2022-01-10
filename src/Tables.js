import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const DoseTable = (props) => {
  var { data, keys, population } = props;

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>First dose</TableCell>
            <TableCell>Fully vaccinated</TableCell>
            <TableCell>Hospitalized</TableCell>
            <TableCell>ICU</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keys.map(
            (key) =>
              data[key] && (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>
                    {(
                      (data[key].slice(-1)[0].peopleVaccinated * 100) /
                      population[key]
                    ).toFixed(1)}{" "}
                    % (+
                    {(
                      (data[key].slice(-1)[0].changePeopleVaccinatedPastWeek * 100) /
                      population[key]
                    ).toFixed(1)}{" "}
                    %)
                  </TableCell>
                  <TableCell>
                    {(
                      (data[key].slice(-1)[0].peopleFullyVaccinated * 100) /
                      population[key]
                    ).toFixed(1)}{" "}
                    % (+
                    {(
                      (data[key].slice(-1)[0].changePeopleFullyVaccinatedPastWeek * 100) /
                      population[key]
                    ).toFixed(1)}{" "}
                    %)
                  </TableCell>
                  <TableCell>
                    {(
                      (data[key].slice(-1)[0].hospitalized)
                    ).toFixed(0)}{" "}
                    (+
                    {(
                      (data[key].slice(-1)[0].changeHospitalized)
                    ).toFixed(0)}
                    )
                  </TableCell>

                  <TableCell>
                    {(
                      (data[key].slice(-1)[0].icu)
                    ).toFixed(0)}{" "}
                    (+
                    {(
                      (data[key].slice(-1)[0].changeICU)
                    ).toFixed(0)}
                    )
                  </TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DoseTable;
