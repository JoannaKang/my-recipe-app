import React from "react";
import { Link } from "react-router-dom";

import CategoryList from "../../Component/CategoryList/CategoryList";
import "./InMyFridgeList.css";

class InMyFridgeList extends React.Component {
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
          <h1>In My Fridge List</h1>
        </div>
        <CategoryList
          items={this.props.items}
          setChecked={this.props.setChecked}
        />
        <Link to="/shoppingList">
          <button className="move-button" onClick={this.props.moveList}>
            Move to Shopping List
          </button>
        </Link>
      </>
    );
  }
}

export default InMyFridgeList;
