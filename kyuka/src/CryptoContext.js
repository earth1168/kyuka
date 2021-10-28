import React, { createContext, useContext, useState, useEffect } from 'react'

const Crypto = createContext()

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("THB");
    const [symbol, setSymbol] = useState("฿");

    useEffect(() => {
        if (currency === "THB") setSymbol("฿");
        else if (currency === "USD") setSymbol("$");
    }, [currency]);
    //when currency change -> run useEffect
    return (
        <Crypto.Provider value ={{currency,symbol,setCurrency}}>
            {children}
        </Crypto.Provider>
    )
}

export default CryptoContext

export const CryptoState = () => {
    return useContext(Crypto)
}