import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dashbaord from "./Component/Dashboard/Dashboard";
import NavBar from "./Component/NavBar/NavBar";

import Home from "./Page/Home/Home";
import MyRecipes from "./Page/MyRecipes/MyRecipes";
import MyFridgeList from "./Page/InMyFridgeList/InMyFridgeList";
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
              path="/home"
              element={<Home items={this.state.myFridgeItems} />}
            />
            <Route path="/myRecipes" element={<MyRecipes />} />
            <Route
              path="/shoppingList"
              element={<ShoppingList items={this.state.shoppingListItems} />}
            />
            <Route
              path="/inMyFridgeList"
              element={<MyFridgeList items={this.state.myFridgeItems} />}
            />
          </Routes>
        </section>
        <NavBar />
      </>
    );
  }
}

export default App;
