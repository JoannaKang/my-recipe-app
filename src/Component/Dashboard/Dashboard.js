import React from "react";
//(1) Link 컴포넌트를 react-router-dom에서 불러옵니다.
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
        {/* (2) button 태그를 Link 컴포넌트로 감싸고, to 속성을 추가하여 어떤 url로 이동해야 하는지 설정  */}
        <Link to="/shoppingList">
          <button
            className="add-shoppinglist"
            onClick={() => this.props.addItem("shoppingListItems", this.state)}
          >
            <FontAwesomeIcon icon={faShoppingBasket} />
            Add Shopping Item
          </button>
        </Link>
        {/* (2) button 태그를 Link 컴포넌트로 감싸고, to 속성을 추가하여 어떤 url로 이동해야 하는지 설정  */}
        <Link to="/inMyFridgeList">
          <button
            className="add-to-myfridge"
            onClick={() => this.props.addItem("myFridgeItems", this.state)}
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
