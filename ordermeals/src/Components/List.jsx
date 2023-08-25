import SmallBtn from "./SmallBtn";

function List() {
  return (
    <div className="wrapper">
      <ul className="list-container">
        <li className="list-container__list">
          <div className="list-container__list--left">
            <h3>Sushi</h3>
            <i>Finest fish and veggies</i>
            <p>22.99</p>
          </div>
          <div className="list-container__list--right">
            <div className="list-container__list--right--input">
              <h4>Amount</h4>
              <input></input>
            </div>
            <SmallBtn text="+ Add" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default List;
