import csv from 'csvtojson';

const formatFlightData = (flightData, flightSegments) => {
    return flightData.map(flight => {
        const matchingFlights = flightSegments.filter(segment => segment.flightid === flight.id);

        return {
            ...flight,
            stops: matchingFlights.length,
            flights: {
                matchingFlights
            }
        }
    })
}

export default async () => {
    const flightData = await csv().fromFile('./service/flight_data/flighdata_B.csv');
    const flightSegments = await csv().fromFile('./service/flight_data/flighdata_B_segments.csv');

    return formatFlightData(flightData, flightSegments);
}