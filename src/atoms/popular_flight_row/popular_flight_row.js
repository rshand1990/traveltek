// TODO make this do entries based on number of args to be
// more reusable in the future

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const PopularFlightRow = (flight) => (
    <TableRow key={flight.destair}>
        <TableCell component="th" scope="row">
            {flight.destair}
        </TableCell>
        <TableCell align="right">
            {flight.count}
        </TableCell>
    </TableRow>
)
