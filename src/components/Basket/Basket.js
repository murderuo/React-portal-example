import './Basket.css';
import React, { useState } from 'react';
import withContext from '../hoc/withContext';

function Basket(props) {
  const { baskets, setBaskets } = props;

  // const [isLoading, setIsLoading] = useState(true);

  return !baskets ? (
    <div className="container">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="container">
      {baskets.map(item => (
        <div key={item.id} className="basket-card">
          <div className="basket-image">
            <img src={item.image} alt="" />
          </div>
          {/* <div className="desc">{item.description}</div> */}
          <div className="basket-title">{item.title}</div>
          <div className="basket-price">
            {item.price}${' '}
            
          </div>
        </div>
      ))}
      <div className="basket-total">
        <h2>Total: {baskets.reduce((a, b) => a + b.price, 0)}$</h2>
      </div>
    </div>
  );
}

export default withContext(Basket);
