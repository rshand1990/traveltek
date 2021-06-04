import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const FlightInfo = (flight) => (
    <TableRow key={flight.id}>
        <TableCell component="th" scope="row">
            {flight.depair}
        </TableCell>
        <TableCell align="right">
            {flight.destair}
        </TableCell>
        <TableCell align="right">
            {flight.outdeparttime}
        </TableCell>
        <TableCell align="right">
            {flight.outarrivaltime}
        </TableCell>
        <TableCell align="right">
            {flight.indeparttime === '00:00:00' ? 'N/A' : flight.indeparttime}
        </TableCell>
        <TableCell align="right">
            {flight.inarrivaltime === '00:00:00' ? 'N/A' : flight.inarrivaltime }
        </TableCell>
        <TableCell align="right">
            {flight.inarrivaltime === '00:00:00' ? flight.stops / 2 : flight.stops}
        </TableCell>
        <TableCell align="right">
            {flight.originalcurrency} {flight.originalprice}
        </TableCell>
    </TableRow>
)
