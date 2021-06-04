import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import TableBody from "@material-ui/core/TableBody";

import { PopularFlightRow} from '../../atoms/popular_flight_row/popular_flight_row.js';

export const PopularFlights = ({ popularFlights }) => {
    const body = popularFlights.map(flight => PopularFlightRow(flight));

    return(
        <TableContainer component={Paper}>
            <Table key='popular flights' aria-label="popular flights table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Destination
                        </TableCell>
                        <TableCell align="right">
                            Number of flights
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {body}
                </TableBody>
            </Table>
        </TableContainer>
    )
};