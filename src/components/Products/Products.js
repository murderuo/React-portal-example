import axios from 'axios';
import { useState, useEffect } from 'react';

function Products() {
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [showShoppingList, setShowShoppingList] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setData(res.data);
    setIsLoading(false);
    // setFilteredData(res.data);
  };

  useEffect(() => {
    // component did mount => []
    getData();
    /* return () => {
      // component will unmount
    } */
  }, []);
  return (
    <div className='container'>
      {data.map(item => (
          <div key={item.id}className="card">
            <div className="image"><img src={item.image} alt="" /></div>
            {/* <div className="desc">{item.description}</div> */}
            <div className="title">{item.title}</div>
            <div className="price">{item.price}</div>
          </div>
        
      ))}
    </div>
  );
}

export default Products;
