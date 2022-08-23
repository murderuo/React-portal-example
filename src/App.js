import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <div>
      <h1>This is Portal App</h1>
      <div className="navbar">
        <NavBar />
        <Products/>
      </div>
    </div>
  );
}

export default App;
