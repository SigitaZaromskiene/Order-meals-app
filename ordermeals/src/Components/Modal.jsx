function Modal() {
  return (
    <div className="modal-container">
      <ul className="modal-container__modal">
        <li className="modal-container__modal__list">
          <div className="modal-container__modal__list--left">
            <h4>Name</h4>
            <div className="modal-container__modal__list--left--price">
              <p>price</p>
              <p>number</p>
            </div>
          </div>
          <div className="modal-container__modal__list--right">
            <button>+</button>
            <button>-</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
