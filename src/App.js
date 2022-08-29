import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>This is Portal App</h1>
      <BrowserRouter>
        <NavBar />
        {/* <Products /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
