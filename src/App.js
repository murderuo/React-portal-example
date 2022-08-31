import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import BasketProvider from "./context/BasketContext";

function App() {
  return (
    <div>
      <h1>This is Portal App</h1>
      <BasketProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </BasketProvider>
    </div>
  );
}

export default App;
