import { useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";
import ModalBtns from "./ModalBtns";

const URL = "http://localhost:3006/cartModal";
const URL1 = "http://localhost:3006/cartDelete";

function Modal() {
  const {
    setModal,
    setErrMessage,
    setCartListResponse,
    cartListResponse,
    editSumResponse,
    modal,
  } = useContext(Global);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setCartListResponse(res.data))
      .catch((err) => setErrMessage(err.message));
  }, [editSumResponse]);

  const getTotalCart = () => {
    const sum = cartListResponse.map((li) => li.amount * li.price);

    const total = sum.reduce((acc, curr) => acc + curr);
    return Number(total).toFixed(2, 0);
  };

  const orderModalHandler = () => {
    setModal(false);
    setErrMessage("Thank you for your order");

    axios.delete(URL1, cartListResponse).then((res) => console.log(res));
  };

  return (
    <>
      {modal === true ? (
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
                        <p> x {li.amount}</p>
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
              <button onClick={orderModalHandler}>Order</button>
            </div>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
