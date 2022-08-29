import React from "react";
import { Link } from "react-router-dom";

import CategoryList from "../../Component/CategoryList/CategoryList";
import "./ShoppingList.css";

class ShoppingList extends React.Component {
  componentWillUnmount() {
    this.props.items.forEach((item) => {
      if (item.checked) {
        item.checked = false;
      }
    });
  }
  render() {
    return (
      <>
        <div className="page-title">
          <h1>Shopping List</h1>
        </div>
        <CategoryList
          items={this.props.items}
          setChecked={this.props.setChecked}
        />
        <Link to="/inMyFridgeList">
          <button className="move-button" onClick={this.props.moveList}>
            Move to In My Fridge List
          </button>
        </Link>
      </>
    );
  }
}
export default ShoppingList;
