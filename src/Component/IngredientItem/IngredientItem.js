import "./IngredientItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function IngredientItem(props) {
  return props.items.map((el, index) => (
    <div key={index} className="item-div">
      <input type="checkbox" className="checkbox" />
      <div className="detail">
        <span>{el.name}</span>
        <span>
          <FontAwesomeIcon
            className="plus"
            icon={faPlus}
            color={"grey"}
            size="xs"
          ></FontAwesomeIcon>{" "}
          {el.quantity}{" "}
          <FontAwesomeIcon
            className="minus"
            icon={faMinus}
            size="xs"
            color={"grey"}
          ></FontAwesomeIcon>
        </span>
      </div>
    </div>
  ));
}

export default IngredientItem;
