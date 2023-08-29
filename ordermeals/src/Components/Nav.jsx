import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Global } from "./Global";

const URL = "http://localhost:3006/cartModal";

function Nav() {
  const { lastUpdate, cartListResponse, setErrMessage, setCartListResponse } =
    useContext(Global);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setCartListResponse(res.data))
      .catch((err) => setErrMessage(err.message));
  }, [lastUpdate]);

  const cartAmountHandler = () => {
    if (cartListResponse === null) {
      return;
    }
    return cartListResponse.reduce((acc, curr) => acc + curr.amount, 0);
  };

  return (
    <div className="nav-container">
      <div className="nav-container__logo">ReactMeals</div>
      <div className="nav-container__cart">
        <div className="nav-container__cart--left">
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Your Cart</p>
        </div>
        <p className="nav-container__cart--number">{cartAmountHandler()}</p>
      </div>
      <FontAwesomeIcon className="nav-container__cart--burger" icon={faBars} />
    </div>
  );
}

export default Nav;
