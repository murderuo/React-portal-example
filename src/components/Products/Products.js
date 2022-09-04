import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";
import withSearch from "../hoc/withSearch";

function Products(props) {
  const { baskets, setBaskets, searchValue } = props;

  const [data, setData] = useState([]);
  const [tempdata, setTempdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data);
    setData(res.data);
    // setProducts(res.data);
    setTempdata(res.data);
    setIsLoading(false);
  };


  useEffect(() => {
    getData();
  }, []);

  //when search input changes this function will be called
  useEffect(() => {
    // console.log('here',searchValue);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
    if (searchValue === "") {
      setData(tempdata);
    }
    //eslint-disable-next-line
  }, [searchValue]);

  return isLoading ? (
    <div className="container">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="container">
      <div id="details"></div>
      {/* //modal window open will be here */}
      {data.map((item) => (
        <div key={item.id} className="card">
          <div className="image">
            <img src={item.image} alt="" onClick={() => alert("test")} />
          </div>
          <div className="title">{item.title}</div>
          <div className="price">
            {item.price}${" "}
            <button
              className="add"
              onClick={() => setBaskets([...baskets, item])}
              disabled={baskets.find((basket) => basket.id === item.id)}
            >
              {baskets.find((basket) => basket.id === item.id)
                ? "Added"
                : "Add Basket"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default withSearch(Products);
