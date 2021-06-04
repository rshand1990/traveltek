import express from 'express';
import fetchFlightData from './fetch_flight_data.js';
import { mostPopularDestinations } from './flight_statistics.js';
import { filterAMFlights, filterUniqueFlightNumbers } from './filter_flight_data.js';

const port = process.env.PORT || 3000;

const server = express();

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

server.get('/flightdata', async (req, res) => {
    const flightData = await fetchFlightData();
    res.send(flightData);
});

server.get('/flightstatistics', async (req, res) => {
    const flightData = await fetchFlightData();
    res.send({
        flightCount: mostPopularDestinations(flightData),
    });
});

server.get('/flightfilters/mornings', async (req, res) => {
    const flightData = await fetchFlightData();
    res.send(filterAMFlights(flightData));
});

server.get('/flightfilters/unique', async (req, res) => {
    const flightData = await fetchFlightData();
    res.send(filterUniqueFlightNumbers(flightData))
})
