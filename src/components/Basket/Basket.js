import React, { useContext } from 'react';
import {BasketContext} from '../../context/BasketContext';
import withContext from '../hoc/withContext';

function Basket(props) {
  // const { baskets } = useContext(BasketContext);
  // console.log(baskets);
  console.log(props);

  return (
    <div className="container">
      This is Basket Page,context value is {JSON.stringify(props.baskets)}
    </div>
  );
}

export default withContext(Basket) ;
