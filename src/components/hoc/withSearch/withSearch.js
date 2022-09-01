import React, { useState, useContext } from 'react';
import { BasketContext } from '../../../context/BasketContext';

const withSearch = WrappedComponent => {
  const NewComponent = props => {
    const [search, setSearch] = useState('');
    const { baskets, setBaskets } = useContext(BasketContext);

    return (
      <WrappedComponent
        baskets={baskets}
        setBaskets={setBaskets}
        search={search}
        setSearch={setSearch}
        {...props}
      />
    );
  };

  return NewComponent;
};

export default withSearch;
