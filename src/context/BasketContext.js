import React, { createContext, useState } from 'react';

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [baskets, setBaskets] = useState([]);
  // const [products,setProducts]=useState([])
  // const values = { baskets, setBaskets,products,setProducts };
  const values = { baskets, setBaskets };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

export default BasketProvider;
