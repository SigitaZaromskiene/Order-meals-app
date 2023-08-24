import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-container__logo">ReactMeals</div>
      <div className="nav-container__cart">
        <div className="nav-container__cart--left">
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Your Cart</p>
        </div>
        <p className="nav-container__cart--number">0</p>
      </div>
    </div>
  );
}

export default Nav;
