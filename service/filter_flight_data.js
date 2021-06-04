export const filterAMFlights = formattedFlightData => formattedFlightData
    .filter(flight => {
        const timeInHours = new Date(`${flight.outdepartdate}T${flight.outdeparttime}`).getHours();

        return timeInHours < 12;
    });

export const filterUniqueFlightNumbers = formattedFlightData => {
    return Object.values(
        formattedFlightData.reduce((acc, flight) => {
            if (!acc[flight.outflightno]) {
                acc[flight.outflightno] = flight;
            }
            return acc;
        }, []));
}