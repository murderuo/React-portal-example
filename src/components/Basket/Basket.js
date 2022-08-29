import React, { useContext } from 'react';
import {BasketContext} from '../context/BasketContext';

function Basket() {
  const { baskets } = useContext(BasketContext);
  console.log(baskets);

  return (
    <div className="container">
      This is Basket Page,context value is {JSON.stringify(baskets)}
    </div>
  );
}

export default Basket;
