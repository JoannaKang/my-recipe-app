// 스타일 시트를 불러옵니다.
import "./App.css";

// 아이콘 삽입에 필요한 패키지를 불러옵니다.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const SELECT_OPTION = [
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


  const state = { quantity: 1 };
  // 문제2. Q1-1. 입력 이벤트 콜백함수 정의하기
  // state에 입력 이벤트가 발생하는 폼의 이름과 입력값을 key, value 쌍으로 저장합니다.
  const getInput = (e) => {
    state[e.target.name] = e.target.value;
    // 문제2. Q1-2. getInput 호출될 때 마다 state의 값을 콘솔에 출력합니다.
    console.log(state);
  };

  return (
    <>
      <header className="header">What's in My Fridge</header>
      <div className="add-list">
        {/* 문제2. Q2-1, 2. 텍스트 입력 폼의 이름을 name으로 지정하고 입력 이벤트의 콜백함수로 getInput 함수를 바인딩합니다. */}
        <input
          className="text-input"
          name="name"
          type="text"
          placeholder="+ Add new Item"
          onKeyUp={(e) => getInput(e)}
        />
        {/* 문제1. Q1-1. 스타일링에 활용하기 위한 클래스 이름을 "category-select" 라고 설정합니다. */}
        {/* 문제2. Q2-3, 4. 텍스트 입력 폼의 이름을 category로 지정하고 입력 이벤트의 콜백함수로 getInput 함수를 바인딩합니다. */}
        <select
          className="catecory-select"
          defaultValue="-Select-"
          name="category"
          onChange={(e) => getInput(e)}
        >
          {/* 문제1. Q1-2. SELECT_OPTION 변수에 할당된 배열을 순회하며 <option> 태그를 만듭니다. */}
          {SELECT_OPTION.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        {/* 문제1. Q2-1, 2, 3. <input> 태그 만드는 곳 */}
        {/* 문제2. Q2-5, 6. 숫자 입력 폼의 이름을 quantity로 지정하고 입력 이벤트의 콜백함수로 getInput 함수를 바인딩합니다. */}
        <input
          className="quantity"
          type="number"
          min="1"
          defaultValue="1"
          name="quantity"
          onChange={(e) => getInput(e)}
        />
        {/* 문제2. Q3-1, 2. 유저가 입력한 아이템이 shopping list에 등록된다고 알림 팝업에 출력합니다. */}
        <button
          className="add-shoppinglist"
          onClick={() => alert(`${state.name} added in the shopping list`)}
        >
          {/* 문제1. Q3-1. 아이콘을 삽입합니다. */}
          <FontAwesomeIcon icon={faShoppingBasket} />
          {/* 문제1. Q3-2. 버튼 표시 텍스트를 교체합니다. */}
          Add Shopping Item
        </button>
        {/* 문제1. Q4-1. 'add-to-myfridge'라는 클래스명을 가진 버튼을 생성합니다 */}
        {/* 문제2. Q3-3, 4. 유저가 입력한 아이템이 my fridge list에 등록된다고 팝업에 출력합니다.  */}
        <button
          className="add-to-myfridge"
          onClick={() => alert(`${state.name} added in the my fridge list`)}
        >
          {/* 문제1. Q4-2, 3. 버튼 안에 faPlusSquare 아이콘과 'Add to Fridge' 텍스트를 삽입합니다. */}
          <FontAwesomeIcon icon={faPlusSquare} />
          Add to Fridge
        </button>
      </div>
    </>
  );
}

export default App;
