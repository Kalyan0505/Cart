/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import "./App.css";
import CartContent from "./components/CartContent";
import Navbar from "./components/Navbar";
export const contextApiVariable = createContext();

function App() {
  const [totalCartItems, setTotalCartItems] = useState(4);
  const updateTotalCartItems = (newValue) => {
    setTotalCartItems(newValue);
  };
  return (
    <contextApiVariable.Provider
      value={{ totalCartItems, updateTotalCartItems }}
    >
      <Navbar />
      <CartContent />
    </contextApiVariable.Provider>
  );
}

export default App;
