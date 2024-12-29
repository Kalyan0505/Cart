/* eslint-disable react/prop-types */
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext } from "react";
import { contextApiVariable } from "../App";

export default function CartItem({ cartItem, setTotal, setCartItems }) {
  const { totalCartItems, updateTotalCartItems } =
    useContext(contextApiVariable);
  const [count, setCount] = useState(1);

  function handleInc() {
    if (count >= 0) {
      setCount((prev) => prev + 1);
      setTotal((prev) => prev + cartItem.price);
      updateTotalCartItems(totalCartItems + 1);
    }
  }

  const handleDec = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      setTotal((prev) => prev - cartItem.price);
      updateTotalCartItems(totalCartItems - 1);
    } else {
      setCartItems((prevELe) =>
        prevELe.filter((ele) => ele.id !== cartItem.id)
      );
      updateTotalCartItems(totalCartItems - 1);
      setTotal((prev) => prev - cartItem.price);
    }
  };

  const handleRemove = () => {
    setCartItems((prevELe) => prevELe.filter((ele) => ele.id !== cartItem.id));
    updateTotalCartItems(totalCartItems - count);
    setTotal((prev) => prev - cartItem.price * count);
  };

  return (
    <div className="w-full flex justify-between my-4">
      <img src={cartItem.image} alt="" style={{ width: "8rem" }} />
      <div className="w-full justify-between items-center">
        <div>{cartItem.name}</div>
        <div>${cartItem.price}</div>
        <p
          style={{ color: "#645CFF", cursor: "pointer" }}
          onClick={handleRemove}
        >
          remove
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <KeyboardArrowUpIcon
          style={{
            color: "#645CFF",
            cursor: "pointer",
          }}
          onClick={handleInc}
        />
        {count}
        <KeyboardArrowDownIcon
          style={{
            color: "#645CFF",
            cursor: "pointer",
          }}
          onClick={handleDec}
        />
      </div>
    </div>
  );
}
