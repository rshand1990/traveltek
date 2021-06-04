export const mostPopularDestinations = formattedFlightData => formattedFlightData
    .reduce((acc, flight) => {
        const matchingFlightIndex = acc.findIndex(e => e.destair === flight.destair);
        if ( matchingFlightIndex === -1) {
            acc.push({
                destair: flight.destair,
                count: 1
            })
        } else {
            acc[matchingFlightIndex].count++;
        }
        return acc;
    }, []);