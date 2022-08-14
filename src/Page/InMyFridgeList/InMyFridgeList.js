import React from "react";
import CategoryList from "../../Component/CategoryList/CategoryList";
import "./InMyFridgeList.css";

function InMyFridgeList(props) {
  return (
    <>
      <div className="page-title">
        <h1>In My Fridge List</h1>
      </div>
      <CategoryList items={props.items} />
    </>
  );
}

export default InMyFridgeList;
