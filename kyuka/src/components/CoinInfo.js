import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Classnames } from 'react-alice-carousel';
import { HistoricalChart } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinInfo = ({ coin }) => {
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    
    const { currency } = CryptoState();

    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    
        setHistoricData(data.prices);
    };

    useEffect(() => {
        fetchHistoricData();
    }, [currency, days]);

    const darkTheme = createTheme({

        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    const useStyles = makeStyles(() => ({

    }))

    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.container}></div>
        </ThemeProvider>
    )
}

export default CoinInfo;
