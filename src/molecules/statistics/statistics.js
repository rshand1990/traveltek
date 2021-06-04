import React from 'react';
import {PopularFlights} from "../popular_flights/popular_flights";

const fetchFlightData = async () => fetch('http://localhost:3000/flightstatistics')
    .then(res => res.json())


export class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flightStatistics: [],
            popularFlights: null
        };
    };

    filterTop10Flights({flightCount}) {
        return flightCount?.sort((a, b) => a.count < b.count ? 1 : -1)
            .reduce((acc, flight, i) => {
                if (i >= 10) {
                    return acc;
                }
                acc.push(flight)
                return acc;
            }, []);
    }

    componentDidMount() {
        fetchFlightData().then(res => this.setState( {
            flightStatistics: res,
            popularFlights: this.filterTop10Flights(res)
        }));
    };

    render() {
        const popularFlights = this.state.popularFlights;

        return (
            <div>
                { popularFlights && <PopularFlights popularFlights={popularFlights}/> }
            </div>
        )
    }
}