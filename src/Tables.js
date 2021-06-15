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
            <TableCell>First Dose</TableCell>
            <TableCell>Fully Vaccinated</TableCell>
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
                    %
                  </TableCell>
                  <TableCell>
                    {(
                      (data[key].slice(-1)[0].peopleFullyVaccinated * 100) /
                      population[key]
                    ).toFixed(1)}{" "}
                    %
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
