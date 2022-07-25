// 아이콘 삽입에 필요한 패키지를 불러옵니다.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard({ state }) {
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

  const getInput = (e) => {
    state[e.target.name] = e.target.value;
    console.log(state);
  };

  return (
    <div className="add-list">
      <input
        className="text-input"
        name="name"
        type="text"
        placeholder="+ Add new Item"
        onKeyUp={(e) => getInput(e)}
      />
      <select
        className="catecory-select"
        defaultValue="-Select-"
        name="category"
        onChange={(e) => getInput(e)}
      >
        {SELECT_OPTION.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <input
        className="quantity"
        type="number"
        min="1"
        defaultValue="1"
        name="quantity"
        onChange={(e) => getInput(e)}
      />
      <button
        className="add-shoppinglist"
        onClick={() => alert(`${state.name} added in the shopping list`)}
      >
        <FontAwesomeIcon icon={faShoppingBasket} />
        Add Shopping Item
      </button>
      <button
        className="add-to-myfridge"
        onClick={() => alert(`${state.name} added in the my fridge list`)}
      >
        <FontAwesomeIcon icon={faPlusSquare} />
        Add to Fridge
      </button>
    </div>
  );
}

export default Dashboard;
