import { Container, createTheme, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    

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
                <Typography
                    variant="h4"
                    style={{ margin: 18, fintFamily: "Montserrat"}}>
                    Cryptocurrency Prices by Market Cap
                </Typography>

                <TextField label="Search for your favorite Crypto Currency.."
                    variant="outlined"
                    style={{ marginBottom: 20, width: "100%" }}
                    onChange = {(e) => setSearch(e.target.value)}
                />

                <TableContainer>
                    {
                        loading ? (
                            <LinearProgress style = {{ backgroundColor: "gold"}}  />
                        ) : (
                                <Table>
                                    <TableHead style={{ backgroundColor: "#EEBC1D"}}>
                                        <TableRow>
                                            {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                                <TableCell
                                                    style={{
                                                        color: "black",
                                                        fontWeight: "700",
                                                        fontFamily: "Montserrat",
                                                }}
                                                    key={head}
                                                    align={head === "Coin" ? "":"right"}
                                                >
                                                    {head}
                                                    </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        
                                    </TableBody>
                                </Table>
                        )
                    }
                    </TableContainer>

            </Container>
        </ThemeProvider>
    )
}

export default CoinsTable
