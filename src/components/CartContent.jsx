import CartItem from "./CartItem";
import image1 from "../assets/phone-1.png";
import image2 from "../assets/phone-2.png";
import image3 from "../assets/phone-3.png";
import image4 from "../assets/phone-4.png";
import { useContext, useState } from "react";
import { contextApiVariable } from "../App";

export default function CartContent() {
  const [total, setTotal] = useState(2199.96);
  const { totalCartItems, updateTotalCartItems } =
    useContext(contextApiVariable);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: image1,
      name: "Samsung Galaxy S8",
      price: 399.99,
    },
    {
      id: 2,
      image: image2,
      name: "Google Pixel",
      price: 499.99,
    },
    {
      id: 3,
      image: image3,
      name: "Xiaomi Redmi Note 2",
      price: 699.99,
    },
    {
      id: 4,
      image: image4,
      name: "Samsung Galaxy S7",
      price: 599.99,
    },
  ]);

  function handleDelete() {
    setCartItems([]);
    updateTotalCartItems(0);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl my-8">YOUR BAG</h1>
      {totalCartItems === 0 ? (
        <div>is currently empty</div>
      ) : (
        <>
          <div className="w-1/2 border-b-4 rounded-sm my-8">
            {cartItems.map((cartItem) => (
              <CartItem
                setTotal={setTotal}
                cartItem={cartItem}
                setCartItems={setCartItems}
                key={cartItem.id}
              />
            ))}
          </div>

          <div className="flex w-1/2 justify-between">
            <div>Total</div>
            <div
              style={{
                backgroundColor: "#645CFF",
                padding: "5px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              {Math.round(total * 100) / 100}
            </div>
          </div>
          <button
            className="text-white px-4 py-2 rounded-md font-bold mb-8 btn nav"
            onClick={handleDelete}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
