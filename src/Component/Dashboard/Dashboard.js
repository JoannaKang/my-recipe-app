// 아래 코드를 복사하여 리액트 프로젝트 경로에 붙여넣으세요
// 리액트 프로젝트 경로 : src/Component/Dashboard.js

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.css";

// (1) React.Component를 상속받아오는 클래스를 정의
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // (2) 입력 초기값 세팅
    this.state = { quantity: 1 };
  }

  // (3) 내부에서 활용되는 변수와 메서드를 클래스의 구성요소로 재정의
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

  // (4) state를 직접 업데이트하지 말고, 상속받아온 setState를 사용해 업데이트하도록 변경
  // (5) 폼 입력 이벤트에 바인딩된 함수 이름 앞에 this 추가하여 클래스 메서드 사용하도록 지정
  getInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // (6) JSX 리턴 부분 render()로 감싸주기
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
        {/* (7) props로 전달받은 addItem 메서드로 상위 컴포넌트의 상태 값 변경하기*/}
        <button
          className="add-shoppinglist"
          onClick={() => this.props.addItem(this.state)}
        >
          <FontAwesomeIcon icon={faShoppingBasket} />
          Add Shopping Item
        </button>
        <button
          className="add-to-myfridge"
          onClick={() =>
            alert(`${this.state.name} added in the my fridge list`)
          }
        >
          <FontAwesomeIcon icon={faPlusSquare} />
          Add to Fridge
        </button>
      </div>
    );
  }
}

export default Dashboard;
