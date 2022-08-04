import React from "react";
import CategoryList from "../../Component/CategoryList/CategoryList";
import "./ShoppingList.css";
class ShoppingList extends React.Component {
  render() {
    return (
      <>
        <div className="page-title">
          <h1>Shopping List</h1>
        </div>
        <CategoryList items={this.props.items} />
      </>
    );
  }
}

export default ShoppingList;
