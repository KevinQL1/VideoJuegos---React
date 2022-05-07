import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/catalogo" element={<ItemListContainer />} />
        <Route path="/catalogo/:gamesId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
