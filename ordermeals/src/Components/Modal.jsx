import { useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";

const URL = "http://localhost:3006/cartModal";

function Modal() {
  const {
    setModal,
    cartList,
    setErrMessage,
    setCartListResponse,
    cartListResponse,
  } = useContext(Global);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setCartListResponse(res.data))
      .catch((err) => setErrMessage(err.message));
  }, [cartList]);

  return (
    <div className="modal-container">
      <ul className="modal-container__modal">
        {cartListResponse === null
          ? "No items yet"
          : cartListResponse.map((li) => (
              <li key={li.id} className="modal-container__modal__list">
                <div className="modal-container__modal__list--left">
                  <h4>{li.name}</h4>
                  <div className="modal-container__modal__list--left--price">
                    <p>{li.price}</p>
                    <p>{li.amount}</p>
                  </div>
                </div>
                <div className="modal-container__modal__list--right">
                  <button>+</button>
                  <button>-</button>
                </div>
              </li>
            ))}

        <div className="modal-container__modal__list--total">
          <strong>Total amount</strong>
          <p>Price &euro;</p>
        </div>
        <div className="modal-container__modal__list--lower-btns">
          <button onClick={() => setModal(false)}>Close</button>
          <button>Order</button>
        </div>
      </ul>
    </div>
  );
}

export default Modal;
