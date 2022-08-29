import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }

  SELECT_OPTION = [
    "-Select-",
    "🥦 Veggies",
    "🥩 Meat",
    "🐟 Fish",
    "🥛 Dairy",
    "🍓 Fruit",
    "🥖 Bakery",
    "🍰 Dessert",
    "🍯 Sauce",
    "🧂 Spice",
    "💫 etc",
  ];

  getInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="add-list">
        <input
          className="text-input"
          name="name"
          type="text"
          placeholder="+ Add new Item"
          onKeyUp={(e) => this.getInput(e)}
        />
        <select
          className="catecory-select"
          defaultValue="-Select-"
          name="category"
          onChange={(e) => this.getInput(e)}
        >
          {this.SELECT_OPTION.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <input
          className="quantity"
          type="number"
          min="1"
          defaultValue="1"
          name="quantity"
          onChange={(e) => this.getInput(e)}
        />
        <Link to="/shoppingList">
          {/* (1)(2)(3) 
              addItem 콜백함수에 새로 추가된 식재료 정보(=this.state) 및 식재료 정보 종류를 구분하기 위한 type, 식재료 정보에 고유값을 할당하기 위한 createdAt 이라는 키를 새로 할당한 객체를 전달합니다. 
              type에 할당되는 값은 "shoppingListItems", createdAt에 할당되는 값은 Date.now()로 생성한 후 문자열로 변환해 주세요
          */}
          <button
            className="add-shoppinglist"
            onClick={() =>
              this.props.addItem({
                ...this.state,
                type: "shoppingListItems",
                createdAt: Date.now().toString(),
              })
            }
          >
            <FontAwesomeIcon icon={faShoppingBasket} />
            Add Shopping Item
          </button>
        </Link>
        <Link to="/inMyFridgeList">
          {/* (4)(5)(6)
            addItem 콜백함수에 새로 추가된 식재료 정보(=this.state) 및 식재료 정보 종류를 구분하기 위한 type, 식재료 정보에 고유값을 할당하기 위한 createdAt 이라는 키를 새로 할당한 객체를 전달합니다. 
            type에 할당되는 값은 "myFridgeItems", createdAt에 할당되는 값은 Date.now()로 생성한 후 문자열로 변환해 주세요
          */}
          <button
            className="add-to-myfridge"
            onClick={() =>
              this.props.addItem({
                ...this.state,
                type: "myFridgeItems",
                createdAt: Date.now().toString(),
              })
            }
          >
            <FontAwesomeIcon icon={faPlusSquare} />
            Add to Fridge
          </button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
