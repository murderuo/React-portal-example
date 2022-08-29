import './index.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from '../Home/';
import Products from '../Products/';
import Basket from '../Basket';

function NavBar() {
  return (
    <div>
      <nav>
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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
      </Routes>
    </div>
  );
}

export default NavBar;
