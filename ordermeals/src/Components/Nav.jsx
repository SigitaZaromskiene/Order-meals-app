import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Global } from "./Global";
import Modal from "./Modal";

const URL = "http://localhost:3006/cartModal";

function Nav() {
  const {
    cartList,
    cartListResponse,
    setErrMessage,
    setCartListResponse,
    setModal,
    modal,
  } = useContext(Global);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setCartListResponse(res.data);
      })
      .catch((err) => setErrMessage(err.message));
  }, [cartList]);

  const cartAmountHandler = () => {
    if (cartListResponse === null) {
      return;
    }
    return cartListResponse.reduce((acc, curr) => acc + curr.amount, 0);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-container__logo">ReactMeals</div>
        <div className="nav-container__cart">
          <div
            className="nav-container__cart--left"
            onClick={() => setModal(true)}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Your Cart</p>
          </div>
          {!cartListResponse ? (
            0
          ) : (
            <p className="nav-container__cart--number">{cartAmountHandler()}</p>
          )}
        </div>
        <FontAwesomeIcon
          className="nav-container__cart--burger"
          icon={faBars}
        />
      </div>
      {modal ? <Modal /> : null}
    </>
  );
}

export default Nav;
