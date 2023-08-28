import { useContext, useState, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";

const URL = "http://localhost:3006/carts";

function ListAmount({ li }) {
  const [addItem, setAddItem] = useState("");
  const { setCart, cart, setCartList, menuList } = useContext(Global);

  //   const addAmountHandler = () => {
  //     const item = menuList.filter((i) => i.id === li.id);

  //     setCart({
  //       amount: Number(addItem),
  //       price: item[0].price,
  //       name: item[0].name,
  //     });

  //     console.log(cart);
  //     setAddItem("");
  //   };

  const addAmountHandler = () => {
    axios
      .post(URL, { name: li.name, price: li.price, amount: addItem })
      .then((res) => setCartList(res.data));

    setAddItem("");
  };

  return (
    <div className="list-container__list--right--input">
      <h4>Amount</h4>
      <input
        min="1"
        max="50"
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      ></input>
      <button className="btn-small" onClick={addAmountHandler}>
        + Add
      </button>
    </div>
  );
}

export default ListAmount;
