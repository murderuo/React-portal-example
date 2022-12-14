import "./index.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Home/";
import Products from "../Products/";
import Basket from "../Basket";
import withSearch from "../hoc/withSearch/withSearch";
import { DebounceInput } from "react-debounce-input";

function NavBar({ baskets, search, setSearch }) {
  return (
    <div>
      <div className="menu-container">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
            {/* <li>
              <Link to="/test">Test</Link>
            </li> */}
          </ul>
        </nav>
        <div className="search">
          {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
          {/* debounce input */}
          <DebounceInput
            minLength={2}
            element="input"
            placeholder={'Search...'}
            debounceTimeout={300}
            onChange={e => setSearch(e.target.value)}
          />
          {/* <label>Search Value: {search}</label> */}
        </div>
        <div className="basket" id="basket">
          <ul>
            <li>
              <Link to="/basket">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-basket"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                </svg>
                ({baskets.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={<Products searchValue={search} />}
          // element={<Products />}
        ></Route>
        <Route path="/basket" element={<Basket />}></Route>
        {/* <Route path="/test" element={<Test />}></Route> */}
      </Routes>
    </div>
  );
}

export default withSearch(NavBar);
