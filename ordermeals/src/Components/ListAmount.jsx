import { useContext, useState, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";

const URL = "http://localhost:3006/carts";

function ListAmount({ li }) {
  const [addItem, setAddItem] = useState("");
  const { setCart, cart, setCartList, menuList } = useContext(Global);

  const addAmountHandler = () => {
    const item = menuList.filter((i) => i.id === li.id);

    console.log(item);
    setCart({
      id: item[0].id,
      amount: Number(addItem),
      price: item[0].price,
      name: item[0].name,
    });
    setAddItem("");
  };

  useEffect(() => {
    if (cart === null) {
      return;
    }
    axios.post(URL, cart).then((res) => setCartList(res.data));
  }, [cart]);

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
