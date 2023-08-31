import { useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";
import ModalBtns from "./ModalBtns";
import Message from "./Message";

const URL = "http://localhost:3006/cartModal";
const URL1 = "http://localhost:3006/cartDelete";

function Modal() {
  const {
    setModal,
    setErrMessage,
    setCartListResponse,
    cartListResponse,
    editSumResponse,
    setCartDelete,
    errorMessage,
  } = useContext(Global);

  useEffect(() => {
    if (editSumResponse === null) {
      return;
    }
    axios
      .get(URL)
      .then((res) => setCartListResponse(res.data))
      .catch((err) => setErrMessage(err.message));
  }, [editSumResponse]);

  const getTotalCart = () => {
    const sum = cartListResponse.map((li) => li.amount * li.price);

    const total = sum.reduce((acc, curr) => acc + curr, 0);
    return Number(total).toFixed(2, 0);
  };

  const orderModalHandler = () => {
    setModal(false);
    setErrMessage("Thank you for your order");

    axios.delete(URL1, cartListResponse).then((res) => setCartDelete(res.data));
  };

  // useEffect(() => {
  //   if (cartList === null) {
  //     return;
  //   }
  //   axios
  //     .get(URL)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => setErrMessage(err.message));
  // }, [cartList]);

  // useEffect(() => {
  //   if (cartListResponse === null) {
  //     return;
  //   }
  //   axios
  //     .delete(URL1, cartListResponse)
  //     .then((res) => {
  //       console.log(res);
  //       setLastUpdate(Date.now());
  //     })

  //     .catch((err) => setErrMessage(err.message));
  // }, [cartListResponse]);

  if (cartListResponse.length === 0) {
    return (
      <p
        style={{
          textAlign: "center",
          color: "red",
          padding: "5px",
          fontWeight: "500",
        }}
      >
        Empty cart
      </p>
    );
  }

  return (
    <>
      <div className="modal-container">
        <ul className="modal-container__modal">
          {cartListResponse.map((li) => (
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
            {}
            <p>{getTotalCart()} &euro;</p>
          </div>
          <div className="modal-container__modal__list--lower-btns">
            <button onClick={() => setModal(false)}>Close</button>
            <button onClick={orderModalHandler}>Order</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Modal;
