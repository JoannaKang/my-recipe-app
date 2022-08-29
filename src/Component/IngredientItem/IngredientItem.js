import React from "react";
import "./IngredientItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

class IngredientItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.items.length === 0 ? false : true;
  }

  render() {
    return this.props.items.map((el, index) => (
      <div key={index} className="item-div">
        {/* 과제2_Q1: (1) setChecked 콜백 함수를 Checkbox에 바인딩 합니다. */}
        <input
          type="checkbox"
          className="checkbox"
          onClick={(e) => this.props.setChecked(e, el)}
        />
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
}

export default IngredientItem;
