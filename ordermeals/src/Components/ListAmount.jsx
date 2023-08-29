import { useContext, useState } from "react";
import { Global } from "./Global";
import Message from "./Message";
// import axios from "axios";

const URL = "http://localhost:3006/cats";

function ListAmount({ li }) {
  const [addItem, setAddItem] = useState("");
  const { setCartList, setErrMessage, errMessage } = useContext(Global);

  // const addAmountHandler = () => {
  //   axios
  //     .post(URL, { name: li.name, price: li.price, amount: addItem })
  //     .then((res) => setCartList(res.data));

  //   setAddItem("");
  // };

  async function addAmountHandler() {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: li.name,
          price: li.price,
          amount: addItem,
        }),
      });
      if (!response.ok) {
        throw new Error("Cannot add to the cart");
      }
      const data = await response.json();
      setCartList(data);
    } catch (error) {
      setErrMessage(error.message);
    }
    setAddItem("");
  }

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
      {errMessage ? <Message /> : null}
    </div>
  );
}

export default ListAmount;
