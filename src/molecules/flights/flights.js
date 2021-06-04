// TODO a lot of crossover with AllFlights
// find a nice method to increase reuse

import React from "react";
import {FlightInfo} from "../../atoms/flight_info/flight_info";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const fetchFlightData = async (filter) => {
    if (filter) {
        return fetch(`http://localhost:3000/flightfilters/${filter}`)
            .then(res => res.json())
            .catch(e => console.log(e))
    }
    return fetch('http://localhost:3000/flightdata')
        .then(res => res.json())
        .catch(e => console.log(e));
}


export class Flights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flightData: []
        };
    };

    componentDidMount() {
        fetchFlightData(this.props.filter).then(res => this.setState( {
            flightData: res
        }));
    };

    render() {
        const flightData = this.state.flightData;

        const body = flightData?.map(flight => FlightInfo(flight))

        // TODO add a loading spinner for while we are fetching
        // to improve customer experience

        return(
            <TableContainer component={Paper}>
                <Table key='flights' aria-label="all flights table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Departure
                            </TableCell>
                            <TableCell align="right">
                                Destination
                            </TableCell>
                            <TableCell align="right">
                                Outbound Depart time
                            </TableCell>
                            <TableCell align="right">
                                Outbound Arrival time
                            </TableCell>
                            <TableCell align="right">
                                Return Depart time
                            </TableCell>
                            <TableCell align="right">
                                Return Arrival time
                            </TableCell>
                            <TableCell align="right">
                                Stops
                            </TableCell>
                            <TableCell align="right">
                                Price
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {body}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

