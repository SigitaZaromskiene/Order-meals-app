import { useContext, useState, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";

function AddBtn({ li }) {
  const { setCart, cart, setAddItem } = useContext(Global);

  const addAmounHandler = () => {
    setAddItem({
      id: li.id,
      amount: li.amount + 1,
    });
  };

  useEffect(() => {
    axios.post(URL, { ...li }).then((res) => setCart(res.data));
  }, []);

  return (
    <button className="btn-small" onClick={addAmounHandler}>
      + Add
    </button>
  );
}

export default AddBtn;
