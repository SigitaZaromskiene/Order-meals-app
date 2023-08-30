import { useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";
import ModalBtns from "./ModalBtns";

const URL = "http://localhost:3006/cartModal";

function Modal() {
  const {
    setModal,
    cartList,
    setErrMessage,
    setCartListResponse,
    cartListResponse,
    editSum,
    lastUpdate,
    editSumResponse,
  } = useContext(Global);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setCartListResponse(res.data))
      .catch((err) => setErrMessage(err.message));
  }, [editSumResponse]);

  const getTotalCart = () => {
    const sum = cartListResponse.map((li) => li.amount * li.price);

    console.log(sum);
    const total = sum.reduce((acc, curr) => acc + curr);
    return Number(total).toFixed(2, 0);
  };

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
                    <p>{li.price.toFixed(2, 0)}</p>
                    <p>{li.amount}</p>
                  </div>
                </div>
                <ModalBtns li={li} />
              </li>
            ))}

        <div className="modal-container__modal__list--total">
          <strong>Total amount</strong>
          <p>{getTotalCart()} &euro;</p>
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
