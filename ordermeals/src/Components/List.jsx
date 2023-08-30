import { Global } from "./Global";
import { useContext, useEffect } from "react";
import axios from "axios";
import Message from "./Message";
import ListAmount from "./ListAmount";

const URL = "http://localhost:3006/menu";

function List() {
  const { menuList, setErrMessage, setMenuList } = useContext(Global);

  // option with axios:

  //   useEffect(() => {
  //     axios
  //       .get(URL)
  //       .then((res) => {
  //         setMenuList(res.data);
  //       })
  //       .catch((err) => setErrMessage(err.message));
  //   }, [setErrMessage, setMenuList]);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("OOOPS, something is wrong");
      }
      const data = await response.json();
      setMenuList(data);
    } catch (error) {
      setErrMessage(error.message);
    }
  }

  return (
    <div className="wrapper">
      <ul className="list-container">
        {menuList === null ? (
          <Message />
        ) : (
          menuList.map((li) => (
            <li className="list-container__list" key={li.id}>
              <div className="list-container__list--left">
                <h3>{li.name}</h3>
                <i>{li.description}</i>
                <p>{li.price} &euro;</p>
              </div>
              <div className="list-container__list--right">
                <ListAmount li={li} />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default List;
