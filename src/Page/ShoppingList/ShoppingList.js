import React from "react";
import CategoryList from "../../Component/CategoryList/CategoryList";
import "./ShoppingList.css";

function ShoppingList(props) {
  return (
    <>
      <div className="page-title">
        <h1>Shopping List</h1>
      </div>
      <CategoryList items={props.items} />
    </>
  );
}

export default ShoppingList;
