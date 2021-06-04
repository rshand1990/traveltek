import React from 'react';
// import './main.css';
import {AppBar, Tab, Tabs} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Statistics } from '../statistics/statistics.js';
import { Flights } from '../flights/flights.js';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: -1
        };
    };

    handleChange = (event, newValue) => {
        this.setState({
            ...this.state,
            tabValue: newValue
        });
    }

    render() {
        const tabValue = this.state.tabValue;

        return (
            <div>
                <AppBar position='sticky'>
                    <Tabs value={tabValue} onChange={this.handleChange} aria-label="views tab bar" variant="fullWidth">
                        <Tab label='All Flights'/>
                        <Tab label='Filter - AM flights'/>
                        <Tab label='Filter - Unique flights'/>
                        <Tab label='Statistics'/>
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.tabValue} index={0}>
                    <Flights/>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={1}>
                    <Flights filter='mornings'/>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={2}>
                    <Flights filter='unique'/>
                </TabPanel>
                <TabPanel value={this.state.tabValue} index={3}>
                    <Statistics/>
                </TabPanel>
            </div>
        )
    }
}