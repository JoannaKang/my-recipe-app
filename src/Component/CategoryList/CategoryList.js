import "./CategoryList.css";
import IngredientItem from "../IngredientItem/IngredientItem";

function CategoryList(props) {
  return (
    <div className="category-container">
      <div className="category-div">
        <h2>🥦 Veggies</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🥦 Veggies")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>🥩 Meat</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🥩 Meat")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>🐟 Fish</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🐟 Fish")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>🥛 Dairy</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🥛 Dairy")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>🍓 Fruit</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🍓 Fruit")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>🥖 Bakery</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🥖 Bakery")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>🍰 Dessert</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🍰 Dessert")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>🍯 Sauce</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🍯 Sauce")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>🧂 Spice</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "🧂 Spice")}
          setChecked={props.setChecked}
        />
      </div>
      <div className="category-div">
        <h2>💫 etc</h2>
        <IngredientItem
          items={props.items.filter((item) => item.category === "💫 etc")}
          setChecked={props.setChecked}
        />
      </div>
    </div>
  );
}

export default CategoryList;
