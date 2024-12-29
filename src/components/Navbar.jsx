import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { contextApiVariable } from "../App";
import { useContext } from "react";

export default function Navbar() {
  const { totalCartItems } = useContext(contextApiVariable);
  return (
    <div className="flex lg:justify-around lg:px-0 px-24 justify-between  py-8 text-white navbar">
      <h1 className="text-3xl">UseReducer</h1>
      <div className="flex gap-4 relative">
        <ShoppingCartIcon style={{ fontSize: "2.5rem" }} />
        <div className="w-8 h-8 text-white absolute text-2xl left-6 bottom-6 rounded-2xl flex justify-center items-center cartCount">
          {totalCartItems}
        </div>
      </div>
    </div>
  );
}
