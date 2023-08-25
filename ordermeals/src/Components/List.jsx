import { Global } from "./Global";
import SmallBtn from "./SmallBtn";
import { useContext, useEffect } from "react";
import axios from "axios";

function List() {
  const { menuList, setErrMessage } = useContext(Global);

  useEffect(() => {
    if (menuList === null) {
      return;
    }
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setErrMessage(err.message));
  }, []);

  return (
    <div className="wrapper">
      <ul className="list-container">
        {menuList.map((li) => (
          <li className="list-container__list">
            <div className="list-container__list--left">
              <h3>{li.name}</h3>
              <i>{li.description}</i>
              <p>{li.price} &euro;</p>
            </div>
            <div className="list-container__list--right">
              <div className="list-container__list--right--input">
                <h4>Amount</h4>
                <input></input>
              </div>
              <SmallBtn text="+ Add" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
