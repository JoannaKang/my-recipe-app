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

  // (6) JSX 리턴 부분 render()로 감싸주기
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
        {/* (7) props로 전달받은 addItem 메서드로 상위 컴포넌트의 상태 값 변경하기*/}
        <button
          className="add-shoppinglist"
          onClick={() => this.props.addItem("shoppingListItems", this.state)}
        >
          <Link to="/shoppingList">
            <FontAwesomeIcon icon={faShoppingBasket} />
            Add Shopping Item
          </Link>
        </button>
        <button
          className="add-to-myfridge"
          onClick={() => this.props.addItem("myFridgeItems", this.state)}
        >
          <Link to="/inMyFridgeList">
            <FontAwesomeIcon icon={faPlusSquare} />
            Add to Fridge
          </Link>
        </button>
      </div>
    );
  }
}

export default Dashboard;
