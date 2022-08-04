import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashbaord from "./Component/Dashboard/Dashboard";
import NavBar from "./Component/NavBar/NavBar";

import InMyFridgeList from "./Page/InMyFridgeList/InMyFridgeList";
import ShoppingList from "./Page/ShoppingList/ShoppingList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingListItems: [
        { name: "egg", category: "💫 etc", quantity: 1 },
        { name: "milk", category: "🥛 Dairy", quantity: 1 },
      ],
      myFridgeItems: [
        { name: "apple", category: "🍓 Fruit", quantity: 1 },
        { name: "bagle", category: "🥖 Bakery", quantity: 1 },
      ],
    };
  }

  addItem = (propKey, item) => {
    const newState = [...this.state[propKey], item];
    return this.setState({ [propKey]: newState });
  };

  render() {
    return (
      <>
        <header className="header">What's in My Fridge</header>
        <Dashbaord addItem={this.addItem} />
        <section className="main-section">
          <Routes>
            <Route
              path="/shoppingList"
              element={<ShoppingList items={this.state.shoppingListItems} />}
            />
            <Route
              path="/inMyFridgeList"
              element={<InMyFridgeList items={this.state.myFridgeItems} />}
            />
          </Routes>
        </section>
        <NavBar />
      </>
    );
  }
}

export default App;
