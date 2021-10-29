import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false)

    const { currency } = CryptoState();
    
    const fetchCoins = async () => {
        setLoading(true)

        const { data } = await axios.get(CoinList(currency));
        // {data}= data.data destructure

        setCoins(data);
        setLoading(false);
    };
    console.log(coins);
    useEffect(() => {
        fetchCoins();

    }, [currency])

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });
    return (
        <ThemeProvider theme={darkTheme}> 
            <Container style={{textAlign: "center"}}>


            </Container>
        </ThemeProvider>
    )
}

export default CoinsTable
