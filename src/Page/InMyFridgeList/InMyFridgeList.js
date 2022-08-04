import React from "react";
import CategoryList from "../../Component/CategoryList/CategoryList";
import "./InMyFridgeList.css";
class InMyFridgeList extends React.Component {
  render() {
    return (
      <>
        <div className="page-title">
          <h1>In My Fridge List</h1>
        </div>
        <CategoryList items={this.props.items} />
      </>
    );
  }
}

export default InMyFridgeList;
