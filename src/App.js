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
    // 과제1_Q1: (1) itemList라는 빈 배열로 초기값을 세팅합니다.
    this.state = {
      itemList: [],
    };
  }

  // 과제1_Q1: (2)(3)(4) 생명주기 메서드를 호출하여 JSON 파일의 내용을 받아옵니다.
  componentDidMount() {
    fetch("DummyServer/ItemList.json")
      .then((data) => data.json())
      .then((res) => {
        this.setState({ itemList: res.ItemList });
      });
  }

  // 과제1_Q2: (1) 새로 추가된 식재료 정보와 기존 state 에 저장되어있는 itemList 배열을 합쳐서 newState라는 배열을 생성합니다.
  // 과제1_Q2: (2) 그리고 새로 생성된 배열로 itemList의 값을 업데이트합니다.
  addItem = (item) => {
    const newState = [...this.state.itemList, item];
    return this.setState({ itemList: newState });
  };

  // 과제2_Q1: (2)
  setChecked = (e, el) => {
    const newItemList = this.state.itemList.map((item) => {
      if (item.createdAt === el.createdAt) {
        return { ...item, checked: e.target.checked };
      } else {
        return item;
      }
    });

    this.setState({ itemList: newItemList });
  };

  // 과제2_Q2: (1) state 안의 itemList 배열을 순회하며 특정 작업을 수행한 새로운 배열을 리턴합니다.
  moveList = () => {
    const swapedItemList = this.state.itemList.map((item) => {
      //  과제2_Q2: (2) 순회중인 item의 checked 값이 true인지를 확인합니다.
      if (item.checked) {
        // 과제2_Q2: (3) checked가 true에 해당하는 경우 이 클래스 안의 swapType 메서드를 호출하고 그 결과를 리턴합니다.
        return this.swapType(item);
      } else {
        // 과제2_Q2: (4) checked가 false에 해당하는 경우, 아무 처리도 하지 않고 원래 값을 리턴합니다.
        return item;
      }
    });
    // 과제2_Q2: (5) render 함수가 변화된 배열의 값으로 DOM을 업데이트 하도록 setState값을 호출합니다.
    return this.setState({ itemList: swapedItemList });
  };

  // moveList 안에서 호출되는 메서드 입니다.
  swapType = (item) => {
    // 과제2_Q2: (6) 매개변수로 전달받은 type 값이 “myFridgeItems” 인지 확인합니다.
    if (item.type === "myFridgeItems") {
      // 과제2_Q2: (7) If 조건을 만족하는 경우, type을 “shoppingListItems”로 바꾸어 줍니다.
      item.type = "shoppingListItems";
    } else {
      // 과제2_Q2: (8) 그렇지 않다면 type을 myFridgeItems로 바꾸어 줍니다.
      item.type = "myFridgeItems";
    }
    // 과제2_Q2: (9) type이 뒤바뀐 결과를 리턴합니다.
    return item;
  };

  render() {
    console.log(this.state.itemList);
    return (
      <>
        <header className="header">What's in My Fridge</header>
        <Dashbaord addItem={this.addItem} />
        <section className="main-section">
          <Routes>
            {/* 과제1_Q1: (5) <Home> 컴포넌트로 itemList 배열 안의 아이템 중 type이 "myFridgeItems" 에 해당하는 아이템들만 props으로 전달합니다. */}
            <Route
              path="/home"
              element={
                <Home
                  items={this.state.itemList.filter(
                    (item) => item.type === "myFridgeItems"
                  )}
                />
              }
            />
            <Route path="/myRecipes" element={<MyRecipes />} />
            {/* 과제1_Q1: (6) <ShoppingList> 컴포넌트로 itemList 배열 안의 아이템 중 type이 "shoppingListItems" 에 해당하는 아이템들만 props으로 전달합니다. */}
            {/* 과제2_Q1: (7) 새로 생성한 setChecked 콜백함수를 하위 컴포넌트에서 사용할 수 있도록 연결합니다 */}
            {/* 과제2_Q2: (10) ShoppingList, MyFridgeList 에 moveList 함수를 함수명과 같은 이름의Props으로 전달합니다 */}
            <Route
              path="/shoppingList"
              element={
                <ShoppingList
                  items={this.state.itemList.filter(
                    (item) => item.type === "shoppingListItems"
                  )}
                  setChecked={this.setChecked}
                  moveList={this.moveList}
                />
              }
            />
            {/* 과제1_Q1: (7) <MyFridgeList> 컴포넌트로 itemList 배열 안의 아이템 중 type이 "myFridgeItems" 에 해당하는 아이템들만 props으로 전달합니다. */}
            <Route
              path="/inMyFridgeList"
              element={
                <MyFridgeList
                  items={this.state.itemList.filter(
                    (item) => item.type === "myFridgeItems"
                  )}
                  setChecked={this.setChecked}
                  moveList={this.moveList}
                />
              }
            />
          </Routes>
        </section>
        <NavBar />
      </>
    );
  }
}

export default App;
