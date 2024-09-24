import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoins = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-nzBgtXq2gyWNiVZwe6kPkR9f' }
    };

    try {
      const response = await fetch(`/api/coins/markets?vs_currency=${currency.name}`, options);
      const data = await response.json();
      setAllCoins(data);
    } catch (err) {
      console.error('Error fetching coin data:', err);
    }
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const contextValue = {
    allCoins,
    currency,
    setCurrency
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
